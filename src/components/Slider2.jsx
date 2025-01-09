import React, { useEffect, useState } from 'react'
import BG from '../images/bg-video-2.mp4'
import BG2 from '../images/bg2.jpeg'
import BG3 from '../images/bg3.jpeg'
function Slider2() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const slides = [
        {
            type: 'video',
            src: BG
        },
        {
            type: 'image',
            src: BG2,

        },
        {
            type: 'image',
            src: BG3,

        },

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 4000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <Slide key={index} slide={slide} currentIndex={currentIndex} index={index} />
            ))}
        </div>
    );
}

const Slide = ({ slide, currentIndex, index }) => {
    return (
        <div className="slide h-[100vh] w-full absolute top-0 left-0 brightness-[0.8]  -z-10" style={{ display: index === currentIndex ? 'block' : 'none', opacity: index === currentIndex ? 1 : 0 }}>
            {slide.type === 'video' ? (
                <video autoPlay muted loop id="bgVideo">
                    <source src={slide.src} type="video/mp4" />
                </video>
            ) : (
                <img className=' object-cover h-full w-full transition-all brightness-[0.8]' src={slide.src} alt={`Slide ${index}`} />
            )}
        </div>
    )
}



export default Slider2