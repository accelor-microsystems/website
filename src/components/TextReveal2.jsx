import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import "./HomeTitle.css"; // Assuming your CSS is in this file

const RevealText = ({ text, css }) => {
    // Use Intersection Observer
    const { ref, inView } = useInView({
        threshold: 0, // Trigger when 20% of the element is visible
        // Run only once
    });

    // const { ref, inView } = useInView();
    // const animation = useAnimation();
    console.log("TITLE:  ", inView)
    // useEffect(() => {
    //     console.log("from AE: ", inView)
    //     if (inView) {
    //         animation.start("visible")
    //     }
    //     if (!inView) animation.start("hidden")
    // }, [inView]);

    return (
        <h1 ref={ref} className={inView ? "home-title " : ""}>
            <span className={css}>{text}</span>
        </h1>
    );
};

export default RevealText;
