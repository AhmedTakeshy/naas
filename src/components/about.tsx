import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import linesImg from '@/../public/images/lines.png'

export default function About() {
    return (
        <section id='about' className='flex justify-center text-center relative h-[626px]'>
            <div className='space-y-8 max-w-[800px] h-full container'>
                <h2 className=''>About us</h2>
                <p className='text-left'>
                    Welcome to <span className='text-dark-purple'>Focus Marketing Solutions</span>! We&apos;re a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we&apos;re here to help you succeed. <span className='text-dark-purple'> Let&apos;s build something extraordinary together.</span>
                </p>
                <Button asChild className="rounded-full py-4 px-6 border w-full sm:w-auto border-dark-purple hover:bg-dark-purple transition-colors duration-300 bg-transparent hover:text-white text-dark-purple" variant={"ghost"}>
                    <Link href="/read-more">
                        Read more
                    </Link>
                </Button>
            </div>
            <Image src={linesImg} alt="lines" className='object-fill object-bottom z-[-1]' fill />
        </section>
    )
}
