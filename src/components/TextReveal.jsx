import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextReveal = () => {
    const { ref, inView } = useInView();
    const variants = {
        hidden: {
            before: { x: "0%" }, // Initial position of ::before
            after: { x: "-101%" }, // Initial position of ::after
        },
        visible: {
            before: {
                x: "200%", // End position of ::before
                transition: {
                    duration: 2,
                    ease: [0.77, 0, 0.18, 1],
                },
            },
            after: {
                x: "101%", // End position of ::after
                transition: {
                    duration: 2,
                    ease: [0.77, 0, 0.18, 1],
                },
            },
        },
    };

    const animation = useAnimation();
    useEffect(() => {
        console.log("from AE: ", inView)
        if (inView) {
            animation.start("visible")


        }
        if (!inView) animation.start("hidden")
    }, [inView]);

    return (
        <motion.h1 className="">
            <motion.span
                initial="hidden"
                ref={ref}
                variants={variants}
                style={{ position: "relative", display: "block", overflow: "hidden", lineHeight: "1.2" }}
            >
                {/* Simulating the animations for ::before */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        background: "white",
                    }}

                    initial="hidden"
                    animate={animation}
                    variants={variants.before}
                />

                {/* Simulating the animations for ::after */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        background: "#425472",
                    }}
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={variants.after}
                />

                Transforming Ideas into Reality
            </motion.span>
        </motion.h1>
    );
};

export default TextReveal;
