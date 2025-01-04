"use client";
import dynamic from "next/dynamic";
import 'chart.js/auto';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
});
const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
    ssr: false,
});
export default function Chart() {
    const barData = {
        labels: ["XS", "S", "M",],
        datasets: [{
            label: 'Net Profit',
            data: [
                { size: "XS", count: 75 },
                { size: "S", count: 125 },
                { size: "M", count: 175 },
                { count: 200 },
            ],
            backgroundColor: [
                '#7D4283',
                '#F3722C',
                '#F8961E',
            ],
            barThickness: 20,
            parsing: {
                xAxisKey: 'size',
                yAxisKey: 'count'
            }
        }
        ]
    };
    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            layout: {
                padding: 32
            },
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: 'gray', // Color of the grid lines
                        borderDash: [4, 4], // Creates dotted lines ([dashLength, gapLength])
                    },
                    ticks: {
                        color: 'white', // Optional: X-axis tick labels color
                    },
                },
                y: {
                    grid: {
                        color: 'gray', // Color of the grid lines
                        borderDash: [4, 4], // Creates dotted lines
                    },
                    ticks: {
                        color: 'white', // Optional: Y-axis tick labels color
                    },
                },
            }
        },
    };

    const doughnutData = {
        labels: ["Product 1", "Product 2",],
        datasets: [{
            label: 'Net Profit',
            data: [50, 50],
            backgroundColor: [
                '#7D4283',
                '#F3722C',
            ],
            rotation: -90,
        }
        ]
    };
    const doughnutConfig = {
        type: 'doughnut',
        data: doughnutData,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Position the legend below the chart
                labels: {
                    color: 'white', // Change legend label colors
                },
            },
        },
        options: {
            layout: {
                padding: 32
            },
            responsive: true,
        }
    }
    return (
        <section id="chart" className='container flex flex-col gap-4 sm:gap-6'>
            <h2 className='font-semibold text-2xl'>Our Chart</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 rounded-md">
                <div className="bg-[#1E1E1E] w-full flex-1 rounded-md max-w-[736px]">
                    <div className="px-8 py-8 pb-4 border-neutral-500 border-b-2">
                        <h3 className='text-white font-medium text-lg'>
                            Net Profit
                        </h3>
                        <span className='text-neutral-500 text-sm'>
                            2024
                        </span>
                    </div>
                    <Bar data={barConfig.data} options={barConfig.options} />
                    <ul className="flex items-center justify-start gap-3 pt-0 p-8">
                        <li className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-dark-purple" />
                            Product 1
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-orange-500" />
                            Product 2
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-amber-500" />
                            Product 3
                        </li>
                    </ul>
                </div>
                <div className="bg-[#1E1E1E] rounded-md flex-1">
                    <div className="flex flex-col px-8 py-4 pb-1 border-b-2 border-neutral-500">
                        <h3 className='font-medium text-xl'>Primary Text</h3>
                        <h4 className='font-medium text-lg'>5.987,34</h4>
                        <h5 className='font-medium text-base text-stone-300'>Secondary text</h5>
                    </div>
                    <div className="max-w-xs mx-auto">
                        <Doughnut data={doughnutConfig.data} options={doughnutConfig.options} />
                    </div>
                    <ul className="flex items-center justify-start gap-3 pb-4 p-8">
                        <li className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-dark-purple" />
                            Product 1
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-orange-500" />
                            Product 2
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
