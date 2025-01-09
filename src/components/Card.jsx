import React from 'react'
import { motion } from 'framer-motion'
import ViewElement from './ViewElement'
function Card({ image, alt, designation, name, content }) {
    return (
        <div className=' bg-gray-100 overflow-hidden relative rounded-lg max-sm:w-full  p-3 flex flex-col  items-center border'>
            <ViewElement initial={{ left: 0 }} animate={{ left: '100%' }} duration='0.5' styled='absolute rounded-lg h-full p-3 w-full left-0 top-0 bg-gray-100 origin-left'></ViewElement>
            <div className='bg-white h-[150px] w-[150px] border m-3 rounded-full'>
                <img className='rounded-full h-full w-full object-contain' src={image} alt={alt} />
            </div>
            <div className='text-black flex-[2] flex flex-col'>
                <h3 className=' text-[0.9rem] text-left'>{designation}</h3>
                <h3 className='font-bold text-[1.2rem] text-left'>{name}</h3>
                <hr />
                {/* <p className='text-justify mt-2'>{content}</p> */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Card