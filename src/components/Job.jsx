import React from 'react'

function Job({ title, type }) {
    return (
        <div className='border flex max-sm:flex-col max-sm:p-5 h-auto justify-between p-6  bg-white items-center my-6 shadow-md shadow-gray-300'>
            <div className='flex flex-col gap-2'>
                <div className=''>
                    <h3 className='font-semibold max-sm:text-left text-[1.6rem] max-sm:text-[24px]'>{title}</h3>
                </div>
                <div className='border bg-white rounded-full w-[100px]'>
                    {type}
                </div>

            </div>

            <div className='max-sm:w-full'>


                <button className=' bg-blue-600 p-3 max-sm:mt-7 max-sm:w-full text-white rounded-full  hover:bg-blue-800 transition'>Apply now</button>
            </div>
        </div>
    )
}

export default Job