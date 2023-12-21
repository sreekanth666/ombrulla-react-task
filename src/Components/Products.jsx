import React from 'react'
import './CSS/style.css'

function Products() {
    return (
        <div class="dvh mt-8 products p-3 md:px-20 flex flex-wrap md:flex-nowrap items-center gap-x-7 gap-y-7" data-testid="products-component">
            <div>
                <div class="flex md:gap-x-4 gap-x-2 items-center mb-4">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">PRODUCTS</p>
                </div>
                <h3 class="md:text-5xl text-3xl">Our HR Tools</h3>
                <p class="mt-6 text-[#82858d] font-normal text-lg">
                    Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.
                </p>
            </div>
            <div class="bg-[#eff1f5] rounded-xl p-8">
                <h4 class="font-medium text-2xl">Job Grading and Evaluation</h4>
                <p class="mt-6 text-[#82858d] font-normal text-lg">
                    Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.
                </p> 
                <img src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="Job Grading and Evaluation" class="p-10" />
                <p class="my-auto hover:text-[#004eff] cursor-pointer font-normal">Free Trail <span class="text-[#004eff]"><i class="bi bi-arrow-up-right"></i></span></p>

            </div>
            <div class="bg-[#eff1f5] rounded-xl p-8">
                <h4 class="font-medium text-2xl">Compensation Management</h4>
                <p class="mt-6 text-[#82858d] font-normal text-lg">
                    Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.
                </p>
                <img src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="Compensation Management" class="p-10" />
                <p class="my-auto hover:text-[#004eff] cursor-pointer font-normal">Book For Demo <span class="text-[#004eff]"><i class="bi bi-arrow-up-right"></i></span></p>
            </div>
        </div>
    )
}

export default Products