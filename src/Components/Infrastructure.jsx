import React from 'react'
import './CSS/style.css'
import { Slide } from 'react-awesome-reveal'

function Infrastructure() {
    return (
        <div class="dvh inspection p-3 md:px-20 flex items-center gap-x-7" data-testid="infrastructure-component">
            <div>
                <div class="flex md:gap-x-4 gap-x-2 items-center mb-4">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">AI INFRASTRUCTURE INSPECTION</p>
                </div>
                <h3 class="md:text-5xl text-3xl"><Slide>Enhances Efficiency, Safety, and Cost-Effectiveness</Slide></h3>
                <ul class="mt-6 text-lg list-disc pl-6">
                    <li class="mb-3">
                        <span class="font-semibold">Cutting-Edge Solution:</span> Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.
                    </li>
                    <li class="mb-3">
                        <span class="font-semibold">Real-Time Insights:</span> Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.
                    </li>
                    <li class="mb-3">
                        <span class="font-semibold">Longevity and Cost-Effectiveness:</span> Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.
                    </li>
                    <li class="mb-3">
                        <span class="font-semibold">Responsive Maintenance:</span> Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.
                    </li>
                </ul>
                <div class="button mt-6 flex gap-4 flex">
                    <button class="btn-primary md:p-4 md:px-8 p-3 rounded-full w-fit hover:bg-transparent hover:text-[#004eff] border border-[#004eff]">Schedule Call</button>
                    <p class="my-auto hidden md:block hover:text-[#004eff] cursor-pointer font-bold">Read More <span class="text-[#004eff]"><i class="bi bi-arrow-up-right"></i></span></p>
                </div>
            </div>
            <div class="max-w-[30rem] flex items-center justify-center hidden md:block">
                <img src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="Enhances Efficiency, Safety, and Cost-Effectiveness" class="rounded-xl" />
            </div>
        </div>
    )
}

export default Infrastructure