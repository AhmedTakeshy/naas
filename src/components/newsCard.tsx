import Image, { StaticImageData } from 'next/image'
import React from 'react'

type NewsCard = {
    src: StaticImageData
    title: string
    tags: string[]
}

export default function NewsCard({ src, title, tags }: NewsCard) {
    return (
        <li className='grid grid-cols-[auto,1fr] sm:grid-cols-2 sm:gap-x-[30px] gap-x-4 gap-y-6'>
            <Image src={src} alt={title} width={221} height={246} className='row-span-2 rounded-2xl sm:ml-auto sm:w-auto sm:h-auto w-[115px] h-[115px]' />
            <h3 className='sm:text-2xl text-base font-medium'>{title}</h3>
            <div className='flex items-center gap-1.5'>
                {tags.map(tag => <span key={tag} className='py-1 px-3 rounded-full bg-white text-darker'>{tag}</span>)}
            </div>
        </li>
    )
}