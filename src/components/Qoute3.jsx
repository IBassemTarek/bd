import React from "react";
import { TypeAnimation } from "react-type-animation";

const Qoute3 = () => {
    return (
        <div className="flex flex-1 items-center justify-center p-4">
            <TypeAnimation
                sequence={[
                    `ss`
                ]}
                wrapper="div"
                cursor={true}
                repeat={0}
                speed={200}
                className="text-xl max-w-sm text-center"
            />
        </div>
    );
};

export default Qoute3;
