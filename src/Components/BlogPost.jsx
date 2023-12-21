import React from 'react'
import './CSS/style.css'

function BlogPost({heading, content, name, date, imageUrl, time}) {
    return (
        <div class="blog-card md:w-2/6 mb-6">
            <img src={imageUrl} class="rounded-lg" />
            <p class="text-xl font-medium mt-3 mb-3">
                {heading}
            </p>
            <p class="text-[#82858d] font-normal text-lg">{content}</p>
            <div class="writer flex gap-x-2 items-center mt-5 text-sm">
                <img src="./Img/zara.webp" alt="Writer Avatar" class="w-12 h-12" />
                <div>
                    <p class="font-medium m-0 p-0">{name}</p>
                    <p class="text-[#82858d] font-normal">{date} · {time}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost