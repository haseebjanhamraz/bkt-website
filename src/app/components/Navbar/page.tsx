"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import BKTLogo from "./BKTLogo";
import NavLinks from "./NavLinks";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const links = NavLinks()
    console.log(links)
    const menuItems = NavLinks()

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <BKTLogo />
                    <p className="ml-4 uppercase font-bold text-inherit">Baacha Khan Trust</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                {links.map((link) => (
                    <NavbarItem key={link.link}>
                        <Link color="foreground" href={link.link}>
                            {link.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/donate" variant="flat">
                        Donate
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {links.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.link}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
