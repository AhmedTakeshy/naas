import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"

export default function Pricing() {
    return (
        <section id="pricing" className='container flex flex-col sm:flex-row justify-between'>
            <div className='flex flex-col text-center sm:text-left gap-4 sm:w-1/2 mb-8 sm:mb-0'>
                <h2 className='sm:text-6xl text-2xl sm:text-left'>
                    Simple pricing for your Business
                </h2>
                <p className='text-neutral-600 text-base sm:text-[18.25px]'>
                    We have several powerful plans to showcase your business and get discovered
                    as a creative entrepreneurs. Everything you need.
                </p>
            </div>
            <Accordion type={"single"} collapsible className="space-y-7 sm:max-w-[480px] w-full">
                <AccordionItem value="item-1" className="rounded-lg bg-light-darker p-4 ">
                    <AccordionTrigger className="text-dark-purple ">Intro</AccordionTrigger>
                    <AccordionContent>
                        No content yet
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="rounded-lg bg-light-darker p-4 ">
                    <AccordionTrigger className="text-dark-purple ">Base</AccordionTrigger>
                    <AccordionContent>
                        No content yet
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="rounded-lg p-4 bg-dark-purple">
                    <AccordionTrigger>
                        <p className="text-white ">Pro<span className="rounded px-3 py-1 ml-2 bg-white text-dark-purple">Save $40</span> </p>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-white">
                        Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu
                        <div className="flex justify-between items-end mt-5 text-2xl">
                            <p>$<strong>123</strong>/month</p>
                            <Button>Try 1 month</Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="rounded-lg bg-light-darker p-4 ">
                    <AccordionTrigger className="text-dark-purple ">Enterprise</AccordionTrigger>
                    <AccordionContent>
                        No content yet
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
