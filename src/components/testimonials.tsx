"use client"
import { useEffect, useState } from "react"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import oldmanImg from '@/../public/images/oldman.png'
import oldwomanImg from '@/../public/images/oldwoman.png'
import ladyImg from '@/../public/images/lady.png'
export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <section id="testimonials" className=' flex flex-col bg-dark-purple text-white items-center py-20 mb-96'>
            <h2>
                Our clients opinions
            </h2>
            <Carousel setApi={setApi} className=" mt-10 w-full container">
                <CarouselContent>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={oldmanImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />

                                    <h4 className="font-semibold text-left mb-7">
                                        Jonathan Sweeney
                                    </h4>
                                </div>
                                <p className="text-lg">“I love that model. I [used to have to]
                                    call all around, and I absolutely love
                                    that model that you could save me the
                                    time and headache of doing that.”
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={ladyImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />

                                    <h4 className="font-semibold text-left mb-7">
                                        Barbara cook
                                    </h4>
                                </div>
                                <p className="text-lg">
                                    “I am so happy with your company.
                                    Ever since my insurer switched to you, everything and everybody I&apos;ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!”
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={oldwomanImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />
                                    <h4 className="font-semibold text-left mb-7">
                                        Mary Rogers
                                    </h4>
                                </div>
                                <p className="text-lg">
                                    “I just want to thank you for the great
                                    job you did during my transition to
                                    oxygen. You unraveled all the
                                    confusion and the new company is
                                    wonderful.”
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={ladyImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />
                                    <h4 className="font-semibold text-left mb-7">
                                        Barbara cook
                                    </h4>
                                </div>
                                <p className="text-lg">
                                    “Just extra text to show that the carousel is working just fine”
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={oldmanImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />
                                    <h4 className="font-semibold text-left mb-7">
                                        Jonathan Sweeney
                                    </h4>

                                </div>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt consequuntur delectus a eaque quidem, tenetur et reiciendis consectetur error libero ea, veniam porro quasi ipsa labore aliquam tempore incidunt!
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="sm:basis-1/3">
                        <Card className="">
                            <CardContent className="flex flex-col aspect-square items-start justify-around py-4 px-6 bg-darker">
                                <div className="flex flex-col items-start gap-4 mb-auto">
                                    <Image src={oldwomanImg} alt="old man" width={64} height={60} className="rounded-full mb-2" />
                                    <h4 className="font-semibold text-left mb-7">
                                        Mary Rogers
                                    </h4>

                                </div>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt consequuntur delectus a eaque quidem, tenetur et reiciendis consectetur error libero ea, veniam porro quasi ipsa labore aliquam tempore incidunt!
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <div className="flex justify-between items-center w-full mt-8">
                    <CarouselPrevious className="static sm:absolute bg-white text-darker border-none" />
                    <CarouselNext className="static sm:absolute bg-white text-darker border-none" />
                </div>
            </Carousel>
            <ul className="mt-4 text-center flex justify-center items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <li key={index} className={`size-2.5 rounded-full bg-white ${current === index + 1 ? "bg-darker size-3.5" : "bg-white"}`} />
                ))}
            </ul>
        </section>
    )
}
