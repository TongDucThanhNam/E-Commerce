'use client'; // This is a comment

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    Image,
    NavbarItem,
} from "@nextui-org/react";
import React from "react";
import MyCartIcon from "@/components/icons/cart-icon";
import {Button} from "@nextui-org/button";
import {CloseIcon} from "@nextui-org/shared-icons";
import {Link} from "@nextui-org/link";


//Props
interface CartDropdownProps {
    children: React.ReactNode;
}

export const CartDropdown = () => {
    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button isIconOnly={true} className="bg-transparent">
                        <MyCartIcon/>
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="User menu actions"
                onAction={(actionKey) => console.log({actionKey})}
            >

                <DropdownSection title="Your Cart" showDivider={true}>
                    <DropdownItem>
                        <div className="flex items-center gap-x-4 border-divider py-4">
                            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                <Image
                                    src="/src/img_1.png"
                                    width={80}
                                    height={80}
                                    alt="Product image"
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="mt-2 flex items-center gap-2">
                                <span
                                    className="text-small font-semibold text-default-700">$49.99
                                </span>
                                    <span
                                        className="text-small text-default-500">x 1
                                </span>

                                    {/* Plus minus*/}
                                </div>


                                <h4 className="text-small"><a
                                    className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                    role="link" href="#">Training shoes</a></h4>
                                <div className="flex items-center gap-3"><p><span
                                    className="text-small text-default-500">Color: </span><span
                                    className="text-small font-medium capitalize text-default-700">black</span></p>
                                    <p><span
                                        className="text-small text-default-500">Size: </span><span
                                        className="text-small font-medium text-default-700">42</span>
                                    </p>
                                </div>
                            </div>

                            <div className="z-0 group relative inline-flex items-center justify-center box-border">
                                <Button className="bg-red-500 text-white" isIconOnly={true} startContent={<CloseIcon/>}>

                                </Button>
                            </div>
                        </div>
                    </DropdownItem>
                </DropdownSection>

                {/* See all */}
                <DropdownItem
                    className="text-center"
                    onClick={() => {
                        console.log("See all");
                    }}
                >
                    <Link href="/cart">See all</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
