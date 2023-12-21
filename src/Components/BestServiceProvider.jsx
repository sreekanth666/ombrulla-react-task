import React from 'react'
import './CSS/style.css'

function BestServiceProvider() {
    return (
        <div class="service-provider m-3 md:m-auto">
            <div class="flex flex-col box md:gap-4 gap-3 md:rounded-[3rem] rounded-[2rem] p-7 py-12 md:p-24 md:h-5/6 md:w-5/6 mx-auto my-auto">
                <div class="flex gap-x-4 items-center">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">The Best AI Service Provider</p>
                </div>
                <h2 class="m-0 md:w-3/4 md:text-5xl text-3xl font-semibold">Crafting Tomorrow's World with <span class="primary font-normal">AI Excellence</span></h2>
                <p class=" m-0 mt-8 text-[#82858d] font-normal text-lg md:w-3/4">The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.</p>
                <div class="button mt-6 flex gap-4 flex">
                    <button class="hover:bg-transparent hover:text-[#004eff] btn-primary rounded-full flex items-center justify-center btn-play-2"><i class="fa-solid fa-play"></i></button>
                    <p class="my-auto hover:text-[#004eff] cursor-pointer font-semibold">Watch Corporate Video</p>
                </div>
            </div>
        </div>
    )
}

export default BestServiceProvider