import moneyIco from '../../public/icons/money.svg'
import downloadIco from '../../public/icons/download.svg'
import recycleICo from '../../public/icons/recycle.svg'
import userICo from '../../public/icons/user.svg'
import marketIco from '../../public/icons/market.svg'
import boxIco from '../../public/icons/box.svg'
import ServiceCard from './serviceCard'


export default function Services() {
    const services = [
        {
            src: downloadIco,
            title: 'Video making',
            subTitle: 'Random content',
        },
        {
            src: moneyIco,
            title: 'Branding',
            subTitle: 'Random content to fill the blank space',
        },
        {
            src: recycleICo,
            title: 'Marketing strategy',
            subTitle: 'Random content to fill the blank space',
        },
        {
            src: userICo,
            title: 'Email marketing',
            subTitle: 'Random content',
        },
        {
            src: marketIco,
            title: 'Social media marketing',
            subTitle: 'Random content to fill the blank space',
        },
        {
            src: boxIco,
            title: 'Content writing',
            subTitle: 'Random content to fill the blank space',
        },
    ]

    const statistics = [
        {
            title: '1200+',
            subTitle: 'Clients',
        },
        {
            title: '20',
            subTitle: 'Branches',
        },
        {
            title: '200+',
            subTitle: 'Number of Employees',
        },
        {
            title: '315+',
            subTitle: 'Sales Representatives',
        },
    ]
    return (
        <section id='services' className='flex flex-col items-center container'>
            <div className='mb-14 w-full text-center'>
                <h2 className='mb-4'>
                    Our Services
                </h2>
                <p>
                    Transforming your online presence with innovative digital strategies
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-24 my-20'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <p className='text-dark-purple self-start border-b-2 border-white pb-4 w-full flex items-center gap-1'><i className='inline-block w-2 h-2 bg-white rounded-full ' />The company&apos;s philosophy</p>
            </div>
            <div className='grid sm:grid-cols-2 '>
                <div className='flex flex-col items-start gap-6 text-left'>
                    <p className='text-dark-purple text-[62px] font-medium'>We bear the responsibility of developing the sector.</p>
                    <p className='text-neutral-500 text-2xl'>Elevate your brand with our comprehensive marketing solutions, including Digital Marketing, Content Creation, and Social Media Strategy. Enhance visibility through expert SEO and PPC management, </p>
                </div>
                <div className="flex flex-col gap-16">
                    {statistics.map((statistic, index) => (
                        <div key={`${statistic.subTitle}-${index}`} className='flex flex-col items-center gap-2'>
                            <h3 className='text-[48px] font-semibold'>{statistic.title}</h3>
                            <p className='text-neutral-500 font-medium text-lg'>{statistic.subTitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
