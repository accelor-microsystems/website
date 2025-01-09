import React from 'react'

function ValueCard({ width, heading, content }) {
    let wd = width
    return (
        <div className={` text-white`}>
            <h1 className='uppercase text-left font-semibold text-[1.2rem]'>{heading}</h1>
            <p className='text-justify mt-2'>{content}</p>

        </div>
    )
}

export default ValueCard