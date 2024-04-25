'use client'
import React from 'react';
import {
    Accordion,
    AccordionItem,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    useDisclosure
} from "@nextui-org/react";
import {PaymentsIcon} from "@/components/icons/sidebar/payments-icon";
import {CartIcon} from "@nextui-org/shared-icons";
import SwiperThumbnail from "@/app/product/product-thumbnail";
import {Input} from "@nextui-org/input";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="">
            <div className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/*Image*/}
                <div className="relative h-full w-full flex-none">
                    {/*Big image*/}
                    <SwiperThumbnail/>
                </div>
                {/*Details*/}
                <div
                    className="flex flex-col">
                    <h1 className="inline bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent dark:to-foreground-200">{product.name}</h1>
                    {/*Price*/}
                    <p className="text-xl font-medium text-default-800 tracking-tight">{product.price} $</p>


                    {/*Ratings*/}
                    <div className="class=my-2 flex items-center gap-2">
                        <span>⭐⭐⭐⭐⭐</span>
                        <span className="text-default-600">5 reviews</span>
                    </div>

                    {/*Choose attribute*/}
                    <div className="relative flex flex-col gap-2 ml-1 mt-6">
                        <RadioGroup orientation={"horizontal"} className="">
                            <Radio value="1">Color 1</Radio>
                            <Radio value="2">Color 2</Radio>
                            <Radio value="3">Color 3 </Radio>
                        </RadioGroup>
                    </div>


                    <p className="line-clamp-3 text-medium text-default-500">{product.description}</p>


                    <div className="mt-6 flex flex-col gap-1">
                        <div className="mb-4 flex items-center gap-2 text-default-700">
                            <p className="text-default-800">
                                Free shipping for beautiful girls
                            </p>
                        </div>

                        <div
                            className="relative flex flex-col gap-1"
                        >
                            <RadioGroup orientation={"horizontal"} className="">
                                <Radio value="1">Size 1</Radio>
                                <Radio value="2">Size 2</Radio>
                                <Radio value="3">Size 3</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="px-2 w-full -mx-1 mt-2">
                        <Accordion variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                {/*    List has dot in start*/}
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="mt-2 flex gap-2">
                        <Button onPress={
                            onOpen
                        } className="basis-3/4 bg-primary" startContent={<PaymentsIcon/>}>Buy now</Button>
                        <Button className="basis-2/5 bg-secondary" startContent={<CartIcon/>}>Add to cart </Button>
                    </div>

                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-2">Purcharge</ModalHeader>
                                    <ModalBody>
                                        <div className="flex items-center dark h-screen justify-center p-4">
                                            <div className="flex w-full max-w-2xl py-8">
                                                <form className="flex flex-col gap-4 py-8">
                                                    {/*Email*/}
                                                    <div
                                                        className="group flex flex-col w-full group relative justify-end">
                                                        <Input
                                                            labelPlacement="outside"
                                                            label="Email address"
                                                            placeholder="Enter your email address"
                                                            required>
                                                        </Input>
                                                    </div>

                                                    {/*Name*/}
                                                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                                        {/*First Name*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"
                                                                isRequired={true}
                                                                label="First Name"
                                                                placeholder="Enter your first name"
                                                                required>
                                                            </Input>
                                                        </div>


                                                        {/*Last Name*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Last Name"
                                                                placeholder="Enter your last name"
                                                                required>
                                                            </Input>
                                                        </div>
                                                    </div>

                                                    {/*Address*/}
                                                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                                        {/*Address*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Address"
                                                                placeholder="Le Van Luong, District 7, HCMC, Vietnam"
                                                                required>
                                                            </Input>
                                                        </div>

                                                        {/*Specific address*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Specific address"
                                                                placeholder="RMIT Univercity"
                                                                isRequired>
                                                            </Input>
                                                        </div>
                                                    </div>

                                                    {/*City and Country*/}
                                                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                                        {/*City*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="City"
                                                                placeholder="Ho Chi Minh City"
                                                                isRequired>
                                                            </Input>
                                                        </div>

                                                        {/*Country*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Country"
                                                                placeholder="Vietnam"
                                                                required>
                                                            </Input>
                                                        </div>
                                                    </div>

                                                    {/*Postcode and Phone number*/}
                                                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                                        {/*Postcode*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Postcode"
                                                                placeholder="700000"
                                                                required>
                                                            </Input>
                                                        </div>

                                                        {/*Phone number*/}
                                                        <div
                                                            className="group flex flex-col w-full group relative justify-end">
                                                            <Input
                                                                labelPlacement="outside"

                                                                label="Phone number"
                                                                placeholder="0901234567"
                                                                required>
                                                            </Input>
                                                        </div>
                                                    </div>

                                                    {/*Address Type*/}
                                                    <div className="relative flex flex-col gap-2 ml-1 mt-6">
                                                        <span
                                                            className="relative text-foreground-500">Address type</span>
                                                        <RadioGroup orientation={"horizontal"} className="">
                                                            <Radio value="1">Home</Radio>
                                                            <Radio value="2">Work</Radio>
                                                            <Radio value="3">Other </Radio>
                                                        </RadioGroup>
                                                    </div>

                                                    {/*Payment method*/}
                                                    <div className="relative flex flex-col gap-2 ml-1 mt-3">
                                                        <span
                                                            className="relative text-foreground-500">Payment method</span>
                                                        <RadioGroup orientation={"horizontal"} className="">
                                                            <Radio value="1">Credit Card</Radio>
                                                            <Radio value="2">Paypal</Radio>
                                                            <Radio value="3">Other </Radio>
                                                        </RadioGroup>
                                                    </div>
                                                    {/*Card number*/}
                                                    <div
                                                        className="group flex flex-col w-full group relative justify-end">
                                                        <Input
                                                            labelPlacement={"outside"}
                                                            label="Card number"
                                                            placeholder="XXXX-XXXX-XXXX-XXXX"
                                                            isRequired>
                                                        </Input>
                                                    </div>

                                                    {/*Cardholder Name*/}
                                                    <div
                                                        className="group flex flex-col w-full group relative justify-end">
                                                        <Input
                                                            labelPlacement={"outside"}
                                                            label="Cardholder Name"
                                                            placeholder="Enter your cardholder name"
                                                            required>
                                                        </Input>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Cancel
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Purchase
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>


                </div>
            </div>
        </div>
    );
};

export default ProductItem;