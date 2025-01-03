import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id="hero" className="container grid sm:grid-cols-2 justify-between">
            <div className="flex flex-col justify-start text-center sm:text-left items-center gap-y-8">
                <p className='sm:text-[50px] sm:font-semibold text-[32px] font-bold'>
                    Transform your business with our
                    <span className='bg-clip-text text-transparent bg-gradient-to-r to-[#C75ED05E] from-[#E879F9]'> Creative Marketing Solutions!</span>
                </p>
                <p className='text-base'>
                    Welcome to Focus Marketing Solutions! We&apos;re a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we&apos;re here to help you succeed. Let&apos;s build something extraordinary together
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2.5 ml-auto mt-2 justify-center sm:justify-start w-full">
                    <Button asChild className="rounded-full py-4 px-6 border w-full sm:w-auto border-dark-purple bg-dark-purple transition-colors duration-300 hover:bg-transparent hover:text-white" variant={"ghost"}>
                        <Link href="/contact">
                            Join Us
                        </Link>
                    </Button>
                    <Button asChild className="rounded-full py-4 px-6 border w-full sm:w-auto border-white  transition-colors duration-300 hover:bg-white hover:text-darker" variant={"ghost"}>
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    )
}
