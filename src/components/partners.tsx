import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'
import cibIco from "@/../public/icons/cib.svg";
import bmwIco from "@/../public/icons/bmw.svg";
import huaweiIco from "@/../public/icons/huawei.svg";
import nasaIco from "@/../public/icons/nasa.svg";
import { StaticImageData } from 'next/image';

export default function Partners() {
    const items: { src: StaticImageData, alt: string }[] = [
        {
            src: cibIco,
            alt: "cib bank image",
        },
        {
            src: bmwIco,
            alt: "bmw logo image",
        },
        {
            src: huaweiIco,
            alt: "huawei logo image",
        },
        {
            src: nasaIco,
            alt: "nasa logo image",
        },
    ];
    return (
        <section className="h-[25rem] rounded-md flex flex-col antialiased  bg-white dark:bg-darker  items-center justify-center relative overflow-hidden">
            <h2 className='mb-16'>
                Our Partners
            </h2>
            <InfiniteMovingCards
                items={items}
                direction="right"
                speed="slow"
            />
        </section>
    )
}
