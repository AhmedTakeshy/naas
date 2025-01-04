import React from 'react'
import { Button } from './ui/button'
import logoImg from '@/../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import linesImg from '@/../public/images/footerlines.png'

export default function Footer() {
    const links = [
        {
            header: 'The company',
            items: [
                {
                    title: 'Who we are',
                    link: '#'
                },
                {
                    title: 'Services',
                    link: '#'
                },
                {
                    title: 'Jobs',
                    link: '#'
                },
                {
                    title: 'Branches',
                    link: '#'
                },
            ]
        },
        {
            header: "Help center",
            items: [
                {
                    title: 'Common questions',
                    link: '#'
                },
                {
                    title: 'Contact us',
                    link: '#'
                },
                {
                    title: 'Register as merchant',
                    link: '#'
                },
            ]
        }
    ]
    return (
        <footer className='bg-dark-purple py-20 relative '>
            <div className="flex flex-col items-start container relative z-[2] text-center sm:text-left">
                <div className='mb-[73px] '>
                    <h2 className='sm:text-5xl text-2xl font-bold mb-2 sm:text-left'>
                        What are you waiting for?
                    </h2>
                    <p className='sm:text-2xl text-base text-stone-50'>
                        Register now to get the best delivery experience for you and your clients in Iraq!
                    </p>
                </div>
                <form action="" className='flex flex-col sm:flex-row items-center gap-2 w-full'>
                    <input type="text" className='bg-white rounded-full py-4 px-6 placeholder:text-neutral-500 max-w-[349px] w-full text-darker' placeholder='Your email' />
                    <Button className="max-w-[349px] py-6 rounded-full sm:w-auto w-full bg-darker text-white" variant={"secondary"}>Register now</Button>
                </form>
            </div>
            <div className="grid sm:grid-cols-[1fr,1fr,2fr,1fr] grid-cols-2 gap-7 justify-between w-full mt-32 relative container z-[2]">
                <Image src={logoImg} alt="logo" width={135} height={40} className='sm:col-span-1 col-span-2' />
                {links.map((link) => (
                    <ul key={link.header} className='flex flex-col gap-6'>
                        <li className='text-white'>
                            {link.header}
                        </li>
                        {link.items.map(item => (
                            <li key={`${item.title}`} className='text-white/80'>
                                <Link href={`${item.link}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
                <div className="flex flex-col gap-4 relative">
                    <Link href={`#`} className='flex items-center gap-4 rounded-full bg-white/25 p-1 text-white'>
                        <FaFacebookF className='bg-white sm:size-12 size-8 rounded-full text-dark-purple sm:text-lg text-base sm:p-2.5 p-1.5' />
                        Facebook
                    </Link>
                    <Link href={`#`} className='flex items-center gap-4 rounded-full bg-white/25 p-1 text-white'>
                        <FaInstagram className='bg-white sm:size-12 size-8 rounded-full text-dark-purple sm:text-lg text-base sm:p-2.5 p-1.5' />
                        Instagram
                    </Link>
                    <Link href={`#`} className='flex items-center gap-4 rounded-full bg-white/25 p-1 text-white'>
                        <FaLinkedin className='bg-white sm:size-12 size-8 rounded-full text-dark-purple sm:text-lg text-base sm:p-2.5 p-1.5' />
                        LinkedIn
                    </Link>
                </div>
            </div>
            <p className='text-center w-full mt-36 relative z-[2] container'>
                © 2024 Leader Express Delivery<br className='inline-block sm:hidden' /> Company. All rights reserved.
            </p>
            <Image src={linesImg} alt="lines" className='object-fill object-bottom absolute bottom-0 hidden sm:inline-block z-[1]' width={966} height={966} />
        </footer>
    )
}
