import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import meetingImg from '@/../public/images/meeting.png'
import shoutoutImg from '@/../public/images/shoutout.png'
import mentorImg from '@/../public/images/mentor.png'
import womanImg from '@/../public/images/woman.png'
import NewsCard from './newsCard'

export default function News() {
    const news = [
        {
            src: shoutoutImg,
            title: "We incorporate the formation of public partnerships as a core aspect of our operations.",
            tags: ["Company", "Contracts"]
        },
        {
            src: mentorImg,
            title: "We incorporate the formation of public partnerships as a core aspect of our operations..",
            tags: ["Company", "Contracts"]
        },
        {
            src: womanImg,
            title: "We incorporate the formation of public partnerships as a core aspect of our operations.",
            tags: ["Company", "Contracts"]
        },
    ]
    return (
        <section id="news" className='container flex flex-col sm:gap-y-[108px]'>
            <div className="flex items-center justify-center sm:justify-between">
                <h2 className='sm:text-[44px] text-2xl'>News</h2>
                <Button asChild className="btn hidden sm:inline-flex border border-dark-purple bg-dark-purple transition-colors duration-300 hover:bg-transparent hover:text-white" variant={"ghost"}>
                    <Link href="/view-all-news">
                        View all news
                    </Link>
                </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Image src={meetingImg} alt="meeting image" width={696} height={460} className='rounded-2xl' />
                    <div className="flex items-center gap-1.5">
                        <span className='py-1 px-3 rounded-full bg-white text-darker'>Company</span>
                        <span className='py-1 px-3 rounded-full bg-white text-darker'>Contracts</span>
                    </div>
                    <p className="text-[32px] font-medium text-dark-purple">
                        We specialize in fostering effective partnerships with supportive companies to drive mutual success.
                    </p>
                    <p className="text-lg font-medium text-neutral-600">
                        We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
                    </p>
                </div>
                <ul className="flex flex-col gap-8">
                    {news.map((news, index) => (
                        <NewsCard key={`${news.title}-${index}`} {...news} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
