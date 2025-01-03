"use client"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import newLogo from "@/../public/images/logo.png"
import { Button } from "@/components/ui/button"
import { LuMenu } from "react-icons/lu"

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/branches", label: "Branches" },
    { href: "/jobs", label: "Jobs" },
]

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                setOpen(false)
            }
        })
    }, [])

    return (
        <header
            className={`flex py-6 mx-auto sm:justify-around justify-between items-center w-full md:px-8 px-4 sm:px-8`}
        >
            <Link
                href="/"
                aria-describedby="open home page"
                aria-label="open home page"
                aria-controls="navbar-default"
                aria-expanded="false"
                className="flex lg:gap-5 md:gap3 gap-2 items-center"
            >
                <Image src={newLogo} width={135} height={40} alt="logo" priority />
            </Link>
            <NavigationMenu className={`ml-auto items-center justify-between hidden gap-2 md:flex`}>
                <NavigationMenuList className="items-center justify-between hidden gap-2 md:flex">
                    {links.map((link) => (
                        <NavigationMenuItem key={link.label}>
                            <Link href={`${link.href}`} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-transparent bg-transparent hover:text-light-green-70 text-white border-2 border-transparent focus:bg-transparent focus:text-light-green-70 focus:border-light-green-70`}>
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-2.5 ml-auto">
                <Button asChild className="btn hidden md:inline-flex border border-white  transition-colors duration-300 hover:bg-white hover:text-darker" variant={"ghost"}>
                    <Link href="/contact">
                        Contact Us
                    </Link>
                </Button>
                <Button asChild className="btn hidden md:inline-flex border border-dark-purple bg-dark-purple transition-colors duration-300 hover:bg-transparent hover:text-white" variant={"ghost"}>
                    <Link href="/contact">
                        Join Us
                    </Link>
                </Button>
            </div>

            {/* Nav for small screens */}
            <div className={`flex items-center gap-3 justify-between h-full md:hidden rounded-xl`}>
                <Popover onOpenChange={setOpen} open={open}>
                    <PopoverTrigger aria-controls="2" aria-labelledby="open menu button" asChild>
                        <Button className="inline-flex md:hidden "
                            aria-pressed={open}
                            onClick={() => setOpen(!open)}
                            aria-describedby="open main menu"
                            aria-label="open menu"
                            data-collapse-toggle="navbar-default"
                            type="button"
                            aria-controls="navbar-default"
                            aria-expanded={open}
                            size={"icon"}
                        >
                            <span className="sr-only">Menu</span>
                            <LuMenu className="!size-6" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="relative w-screen  top-5 border-none rounded-t-none bg-zinc-800">
                        <div className="flex flex-col items-center mx-auto gap-4">
                            <NavigationMenu>
                                <NavigationMenuList className="flex flex-col items-center justify-center gap-2">
                                    {links.map((link) => (
                                        <NavigationMenuItem key={link.label} >
                                            <Link href={`${link.href}`} legacyBehavior passHref>
                                                <NavigationMenuLink
                                                    onClick={() => setOpen(false)}
                                                    className={`${navigationMenuTriggerStyle()} hover:bg-transparent bg-transparent hover:text-light-green-70 text-white border-2 border-transparent focus:bg-transparent focus:text-light-green-70 focus:border-light-green-70`}
                                                >
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="flex items-center gap-2.5 sm:ml-auto">
                                <Button asChild className="btn md:hidden inline-flex border border-white text-white transition-colors duration-300 hover:bg-white hover:text-darker" variant={"ghost"}>
                                    <Link href="/contact">
                                        Contact Us
                                    </Link>
                                </Button>
                                <Button asChild className="btn md:hidden inline-flex border border-dark-purple bg-dark-purple transition-colors duration-300 hover:bg-transparent hover:text-white" variant={"ghost"}>
                                    <Link href="/contact">
                                        Join Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}
