import React, { useRef, useState } from 'react'

function Slider() {

    const sliderRef = useRef(null);
    const [scrollVal, setScrollVal] = useState(0)

    return (
        <div className=' h-[70vh] overflow-hidden'>

            <div className={`w-[300vw] translate-x-[${scrollVal}vw] transition bg-gray-200 h-full flex`} ref={sliderRef}>
                <img className='w-[100vw] h-full' alt="3" src='https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_640.jpg' />
                <img className='w-[100vw] h-full' alt="3" src='https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_640.jpg' />
                <img className='w-[100vw] h-full' alt="3" src='https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528_640.jpg' />
            </div>

            <button className='absolute bg-red-400'
                onClick={() => {

                    setScrollVal((prev) => prev + 100)
                    console.log(scrollVal)


                }}
            >BACK</button>

            <button className='absolute ml-10'
                onClick={() => {
                    setScrollVal((prev) => prev - 100)
                    console.log(scrollVal)
                }}
            >Next</button>

        </div>
    )
}

export default Slider