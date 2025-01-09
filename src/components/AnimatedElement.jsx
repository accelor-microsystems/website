import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, direction, width, delayAn = 0 }) => {

    let val = 0;
    if (direction === 'from-left') {
        val = -100
    }
    else if (direction === 'from-right')
        val = 100
    else if (direction === 'from-down')
        val = 100

    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        console.log("from AE: ", inView)
        if (inView) {
            animation.start("visible")
        }
        if (!inView) animation.start("hidden")
    }, [inView]);

    return (
        <motion.div
            className={`w-[${width}]`}
            ref={ref}
            variants={direction === 'from-down' ? {
                hidden: { y: val, opacity: 0, },
                visible: { opacity: 1, y: 0, }
            } : {
                hidden: { x: val, opacity: 0 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1, type: 'spring', damping: 13, delay: delayAn }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElement;