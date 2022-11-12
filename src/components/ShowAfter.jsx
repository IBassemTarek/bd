import React from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ShowAfter = ({ time, text, ...rest }) => {
    const [styles, api] = useSpring(() => ({
        opacity: 0,
        transform: "translateX(100%) scale(0.5)",
    }));
    useEffect(() => {
        const to = setTimeout(() => {
            api.start({
                opacity: 1,
                transform: "translateX(0%) scale(1)",
            });
        }, time);
        return () => clearTimeout(to);
    }, []);
    return (
        <animated.button style={styles} {...rest}>
            {text}
        </animated.button>
    );
};

export default ShowAfter;
