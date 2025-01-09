import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ViewElement({ children, initial, animate, duration, type, ease, delay = 0, styled }) {
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
            ref={ref}
            variants={{ visible: animate, hidden: initial }}
            animate={animation}
            transition={{ duration: duration, type: type, delay: delay, ease: ease }}
            className={styled}
        // style={{ display: 'inline' }}

        >

            {children}

        </motion.div>
    )
}

export default ViewElement