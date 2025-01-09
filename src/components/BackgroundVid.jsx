import React from 'react'
import BG from '../images/bg-video-2.mp4'
function BackgroundVid() {
    return (
        <div className='h-[100vh] w-full absolute top-0 left-0  -z-10'>
            <video className='brightness-[0.8] object-cover h-full w-full' autoPlay muted loop>
                <source src={BG}></source>
            </video>
        </div>
    )
}

export default BackgroundVid