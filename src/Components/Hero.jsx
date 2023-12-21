import React from 'react'
import './CSS/style.css'
import Navbar from './Navbar'

function Hero() {
    return (
        <div class="landing mb-24">
            <Navbar />
        
            <div class="md:px-24 px-5 md:pt-0 flex flex-col md:flex-row font-semibold gap-3 h-full">
                <div class="flex flex-col justify-center mt-24">
                    <h4 class="md:w-3/4 md:text-6xl text-6xl">Manual Inspection is <span class="primary font-normal">Slow & Error-Prone</span></h4>
                    <p class="mt-8 text-[#82858d] font-normal text-lg">AI-driven computer vision transforms manufacturing quality inspection, boosting precision and cost-efficiency while upholding product excellence.</p>
                    <div class="button mt-6 flex gap-4 flex">
                        <button class="btn-primary md:p-4 md:px-8 p-3 rounded-full w-fit hover:bg-transparent hover:text-[#004eff] border border-[#004eff]">Schedule Call</button>
                        <button class="hover:bg-transparent hover:text-[#004eff] btn-primary p-4 rounded-full flex items-center justify-center btn-play"><i class="fa-solid fa-play"></i></button>
                        <p class="my-auto hidden md:block hover:text-[#004eff] cursor-pointer">Watch Video</p>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full">
                    <div class="border-2 shape1 border-blue-600 rounded-full overflow-hidden hidden md:block"></div>
                    <div class="shape2 border-2 border-white rounded-full overflow-hidden hidden md:block"></div>
                    <img src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="AI visual inspection" class="mask-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero