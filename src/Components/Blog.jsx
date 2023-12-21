import React from 'react'
import BlogPost from './BlogPost'
import './CSS/style.css'

function Blog() {
    return (
        <div class="dvh mt-8 mb-8 products p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7">
            <div class="text-center">
                <div class="flex md:gap-x-4 gap-x-2 items-center mb-4 mx-auto items-center justify-center">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                    <p class="text-medium md:font-bold font-normal">BLOG UPDATES</p>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                </div>
                <h3 class="md:text-5xl text-3xl font-medium">To Read</h3>
            </div>
            <hr class="w-full mt-6 mb-6 blog-hr" />
            <div class="w-full flex flex-wrap md:flex-nowrap gap-4">
                <BlogPost
                    heading="Privacy and security concerns with Artificial Intelligence"
                    imageUrl="./Img/blog1.webp"
                    name="Zara Elizabeth"
                    date="Mar 16, 2020"
                    time="6 min read"
                    content="Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be..."
                />
                <BlogPost
                    heading="The impact of AI on jobs and the workforce"
                    imageUrl="./Img/blog2.webp"
                    name="Zara Elizabeth"
                    date="Mar 10, 2020"
                    time="4 min read"
                    content="The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities..."
                />
                <BlogPost
                    heading="Use of AI in Process Optimization and Quality Control"
                    imageUrl="./Img/blog3.webp"
                    name="Zara Elizabeth"
                    date="Feb 12, 2020"
                    time="11 min read"
                    content="AI Visual Inspection is increasingly being used in process optimization and quality control across a range of industries, including manufacturing, healthcare, and logistics..."
                />
            </div>
        </div>
    )
}

export default Blog