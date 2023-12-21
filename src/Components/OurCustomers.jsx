import React from 'react'
import './CSS/style.css'

function OurCustomers() {
    return (
        <div class="mt-8 mb-8 products p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7" data-testid="customer-component">
            <div class="text-center">
                <div class="flex md:gap-x-4 gap-x-2 items-center mb-4 mx-auto items-center justify-center">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">OUR CUSTOMERS</p>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                </div>
                <h3 class="md:text-5xl text-3xl">They Trust Us</h3>
            </div>
            <div class="logos">
                <div class="logo-scroll">
                    <img src="https://www.ombrulla.com/best-western.webp" alt="Best Western" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/dubai-festival-city.webp" alt="Dubai Festival City" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/wild-leaf.webp" alt=" Wild Leaf" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/emirates.webp" alt="Emirates" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/burger-king.webp" alt="Burger King" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/damac.webp" alt="Damac" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/planet-fitness.webp" alt="Planet Fitness" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/suja.webp" alt="Suja" class="p-5 h-[8rem] md:h-[12rem] logo" />
                    <img src="https://www.ombrulla.com/azelit.webp" alt="Azelit" class="p-5 h-[8rem] md:h-[12rem] logo" />
                </div>
            </div>
        </div>
    )
}

export default OurCustomers