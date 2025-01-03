import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ServiceCardProps = {
    src: StaticImageData,
    title: string,
    subTitle: string,
}

export default function ServiceCard({ src, title, subTitle }: ServiceCardProps) {
    return (
        <li className='flex flex-col justify-start items-center max-w-sm'>
            <div className='mb-8 size-[152px] bg-white rounded-md p-1'>
                <div className='bg-dark-purple rounded-full w-full h-full flex justify-center items-center'>
                    <Image src={src} alt={title} width={64} height={64} className=' ' />
                </div>
            </div>
            <div className="max-w-xs text-center">
                <h3 className='mb-2.5'>{title}</h3>
                <p className='text-neutral-500'>{subTitle}</p>
            </div>
        </li>
    )
}