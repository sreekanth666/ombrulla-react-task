import React, { useRef } from 'react'
import './CSS/style.css'

function Testimonial() {
    const containerRef = useRef(null);
    const scrollAmount = 500;

    const scrollCards = (direction) => {
        if (containerRef.current) {
        if (direction === 'left') {
            containerRef.current.scrollLeft -= scrollAmount;
        } else if (direction === 'right') {
            containerRef.current.scrollLeft += scrollAmount;
        }
        }
    };
    return (
            <div class="dvh mt-8 testimonials p-3 md:px-20 flex flex-col gap-y-20 gap-x-7 bg-[#001a53] text-white" data-testid="testimonial-component">
                <div class="mt-8">
                    <div class="flex md:gap-x-4 gap-x-2 items-center mb-4">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                        <p class="text-medium md:font-bold font-normal">OUR TESTIMONIALS</p>
                    </div>
                    <h3 class="md:text-4xl text-3xl font-medium">What Customers Say About Us</h3>
                </div>
                <div class="scrollable-cards-container overflow-x-auto" ref={containerRef}>
                    <div class="cards flex gap-x-4 overflow-x-auto">
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp" alt="Planet Fitness" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Joseph</p>
                                        <p class="text-indigo-400">Planet Fitness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp" alt="Wild Leaf" class="h-full" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Tony Michael</p>
                                        <p class="text-indigo-400">CEO, The Cotillion Hotels, New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp" alt="Best Western" class="h-full" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">David Thomas</p>
                                        <p class="text-indigo-400">Managing Director Best Western, Kansas, USA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full border-2 overflow-hidden border-white">
                                        <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="Terranz" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">James Joseph</p>
                                        <p class="text-indigo-400">Managing Director, Terranz Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp" alt="Azelit" class="h-full" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Vinod MN</p>
                                        <p class="text-indigo-400">Managing Director, AZEL IT Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden border-2 border-white">
                                        <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="Terranz" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Joseph</p>
                                        <p class="text-indigo-400">Terranz Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="Shipcom" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Quresh Goga</p>
                                        <p class="text-indigo-400">Shipcom wireless</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-[30rem] flex items-center justify-center">
                            <div class="card bg-white md:w-[30rem] w-[18rem] rounded-lg">
                                <svg class="h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-jfcioroc=""><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-astro-cid-jfcioroc=""></path></svg>
                                <div class="p-9">
                                    <p class="text-[#82858d] font-normal text-lg">Ombrulla and Green Palm collaborate on an AI ship inspection project, employing image and video analysis to detect damages and anomalies. We are highly satisfied with the project's outcomes and the benefits it brings.</p>
                                </div>
                                <div class="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                    <div class="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                        <img src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="Green Palms" />
                                    </div>
                                    <div class="detals font-medium">
                                        <p class="text-black">Manoj Menon</p>
                                        <p class="text-indigo-400">Green Palm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex items-center justify-between">
                            <div class="left-5 overlay-button flex items-center justify-center bg-slate-600 text-white rounded-full w-[3rem] h-[3rem] cursor-pointer" onClick={() => scrollCards('left')}><i class="fa-solid fa-chevron-left"></i></div>
                            <div class="right-5 overlay-button flex items-center justify-center bg-slate-600 text-white rounded-full w-[3rem] h-[3rem] cursor-pointer" onClick={() => scrollCards('right')}><i class="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Testimonial