import React from 'react'
import './CSS/style.css'

function Performance() {
    return (
        <div class="dvh mt-8 management p-3 md:px-20 flex flex-wrap gap-y-20 md:flex-nowrap items-center gap-x-7 bg-blue-700 text-white" data-testid="performance-component">
            <div>
                <div class="flex flex-col md:gap-x-4 gap-x-2 mb-4">
                    <img src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="Petran" className='petran-img' />
                    <p class="text-medium font-normal"><span class="font-bold">PE</span>rformance - <span class="font-bold">TR</span>acking - <span class="font-bold">AN</span>alytics</p>
                </div>
                <h3 class="md:text-5xl text-3xl font-medium">AI & IoT Enabled Asset Performance Management</h3>
                <p class="mt-6 text-lg font-normal">
                    Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.
                </p>
                <div class="button mt-6 flex gap-4 flex">
                    <button class="md:p-4 md:px-8 p-3 rounded-full w-fit hover:text-[black] border border-[white] font-medium">Schedule Call</button>
                    <button class="hover:bg-transparent p-4 rounded-full border border-[white] flex items-center justify-center btn-play"><i class="fa-solid fa-play"></i></button>
                    <p class="my-auto font-medium hidden md:block hover:text-[black] cursor-pointer">Watch Video</p>
                </div>
            </div>
            <div class="max-w-[30rem] flex items-center justify-center mb-10">
                <img src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="Asset Performance Management Software" class="rounded-xl" />
            </div>
        </div>
    )
}

export default Performance