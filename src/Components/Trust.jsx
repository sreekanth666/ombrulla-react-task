import React from 'react'
import './CSS/style.css'

function Trust() {
    return (
        <div class="hidden md:block dvh mt-8 mb-8 products p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7" data-testid="trust-component">
            <div class="text-center">
                <div class="flex md:gap-x-4 gap-x-2 items-center mb-4 mx-auto items-center justify-center">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">BRANDS WE WORK WITH</p>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                </div>
                <h3 class="md:text-5xl text-3xl font-medium">Trusted by Thousands of Businesses</h3>
            </div>
            <div class="w-full">
                <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="unv" class="h-32 w-32" width="940" height="788" loading="lazy" decoding="async" />
                    </div>
                    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <img src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="Dahua" class="h-36 w-36" width="940" height="788" loading="lazy" decoding="async" />
                    </div>
                    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <img src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="Nvidia" class="h-32 w-32" width="940" height="788" loading="lazy" decoding="async" />
                    </div>
                    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <img src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="Amazon" class="h-36 w-36" width="940" height="788" loading="lazy" decoding="async" />
                    </div>
                    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="Hikvision" class="h-36 w-36" width="940" height="788" loading="lazy" decoding="async" />
                    </div>
                    <div class="col-span-1 flex justify-center bg-gray-50 py-12 px-8">
                        <img src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="Azure" class="h-24 w-28" width="758" height="447" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust