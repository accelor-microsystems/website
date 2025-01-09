import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function NumberCounter({ from, to }) {
    const nodeRef = useRef();
    const { ref, inView } = useInView({
        // Ensures the animation runs only once
        threshold: 0.5,   // Triggers when 50% of the element is in view
    });

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;

            const controls = animate(from, to, {
                duration: 1,
                onUpdate(value) {
                    node.textContent = value.toFixed(0);
                },
            });

            return () => controls.stop();
        }
    }, [inView, from, to]);

    return (
        <p className="oswald" ref={(el) => {
            ref(el);       // Attach intersection observer ref
            nodeRef.current = el; // Attach animation ref
        }} />
    );
}

export default NumberCounter;
