import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoPlay = true, autoPlayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Automatic slide change
    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(goToNextSlide, autoPlayInterval);
            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [autoPlay, autoPlayInterval]);

    return (
        <div className="slider">
            <div className="slider-image bg-black bg-opacity-20">
                <img className=' mix-blend-multiply' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            {/* <div className="slider-controls">
                <button onClick={goToPreviousSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </div> */}
        </div>
    );
};

export default ImageSlider;
