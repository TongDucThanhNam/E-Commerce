import bcrypt from 'bcrypt';

import Product from './../models/Product.js';
import Cart from './../models/Cart.js';
import CartItems from '../models/CartItems.js';
import Order from '../models/Order.js';
import OrderItems from '../models/OrderItems.js';
import User from '../models/User.js';

const PostOrder = async (req, res, next) => {
    const { user_id, ship_fee, payment_method } = req.body;
    // Step 1: Calculate the total cart
    const userCart = await Cart.findOne({ where: { cart_of: user_id } });
    const allCartItemsByUserId = await CartItems.findAll({ where: { cart_id: userCart.id } });
    let total = 0;
    const promises = allCartItemsByUserId.map(async item => {
        const currItem = await Product.findOne({ where: { id: item.product_id } });
        total += currItem.price * item.quantity;
    });
    Promise.all(promises)
        .then(async () => {
            // Step 2: Create the new order
            const createdOrder = await Order.create({
                order_by: user_id, total, ship_fee, payment_method
            });
            // Step 2.5: Add the others process if needed
            // Step 3: Insert into order items
            allCartItemsByUserId.map(async item => {
                await OrderItems.create({
                    order_id: createdOrder.id,
                    product_id: item.id,
                    quantity: item.quantity,
                });
            });
            // Step 4: Empty user's cart
            await CartItems.destroy({ where: { cart_id: userCart.id } });

            res.status(200).json(`Your order: ${JSON.stringify(createdOrder)}`);
        })
        .catch((error) => console.error(error));
};

const PostCart = async (req, res, next) => {
    const { user_id, cartItems } = req.body;
    // Create new cart if user has no create cart yet.
    // Step 1: Check user's cart if nothing it'll create automatically.
    const [cart, _] = await Cart.findOrCreate({
        where: { cart_of: user_id },
        defaults: {
            cart_of: user_id
        }
    });
    // Step 2: Insert into cart
    const promises = cartItems.map(async (item) => {
        const existedProd = await CartItems.findOne({ where: { product_id: item.id } });
        // Create new cart item if it not exist else just update the quantity
        return existedProd == null ? CartItems.create({
            cart_id: cart.id,
            product_id: item.id,
            quantity: item.quantity,
        }) : existedProd.update({ quantity: existedProd.quantity + item.quantity });
    });
    Promise.all(promises)
        .then(async () => {
            const currCart = await CartItems.findAll({ where: { cart_id: cart.id } });
            res.status(200).json(`Your current cart: ${JSON.stringify(currCart)}`);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Oops! Something went wrong');
        });
};

const GetLogout = async (req, res, next) => {
    if (req.session.loggedIn) {
        req.session.loggedIn = false;
    }
    res.status(200).json(req.session.loggedIn);
};

const PostLogin = async (req, res, next) => {
    const { username, password } = req.body;
    const currUser = await User.findOne({ where: { username } });
    bcrypt.compare(password, currUser.password, (err, result) => {
        if (err) { res.status(404).json(err); return; }
        if (!result) {
            res.status(404).json('Username or password is not matched!');
            return;
        }
        req.session.loggedIn = true;
        req.session.username = currUser.username;
        res.cookie('loggedIn', true, { maxAge: 60 * 1_000 });
        res.cookie('username', currUser.username);
        res.status(200).json(`username: ${req.session.username}`);
    });
};

const userController = {
    PostLogin, GetLogout, PostCart, PostOrder
};

export default userController;