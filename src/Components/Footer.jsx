import React from 'react'
import './CSS/style.css'

function Footer() {
    return (
        <div class="dvh mt-16 products p-3 pt-24 md:px-20 bg-[#04102a] text-[#8A99B4]">
            <div class="flex flex-wrap md:flex-nowrap gap-x-7 gap-y-7">
                <div class="w-full md:w-1/4 mb-6">
                    <p class="font-medium text-2xl text-[white]">About US</p>
                    <p class="mt-6">Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.</p>
                    <div class="flex gap-7 text-[white] text-2xl mt-6">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div class="w-full md:w-1/4 mb-6">
                    <p class="font-medium text-2xl text-[white]">Our Services</p>
                    <ul class="mt-3">
                        <li class="mb-2">AI infrastructure Inspection</li>
                        <li class="mb-2">AI Visual Inspection</li>
                        <li class="mb-2">AI Data Analytics</li>
                        <li class="mb-2">AI People Tracking</li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 mb-6">
                    <p class="font-medium text-2xl text-[white]">Our Solutions</p>
                    <ul class="mt-3">
                        <li class="mb-2">Asset Performance Management</li>
                        <li class="mb-2">Job Grading & Evaluation</li>
                        <li class="mb-2">Compensation Management</li>
                    </ul>
                </div>
                <div class="md:w-1/4">
                    <p class="font-medium text-2xl text-[white]">Reach Us</p>
                    <ul class="mt-3">
                        <li class="mb-3">United Kingdom, 53 Denton close<br />Redhill, Surrey, RH1 5LB<br />+44 787 999 3892</li>
                        <li class="mb-3">Germany, Schützenstraße 51A<br />Lübeck, 23558<br />+49 179 512 5812</li>
                        <li class="mb-3">India, No. 154/20, Royal Space<br />Third Floor TI, HSR Layout,<br />Bangalore, Karnataka<br />560102<br />+91 85900 56435</li>
                    </ul>
                </div>
            </div>
            <div class="item-end"><p class="bottom-0 mt-auto text-sm">© 2020 Ombrulla, Inc. All rights reserved.</p></div>
        </div>
    )
}

export default Footer