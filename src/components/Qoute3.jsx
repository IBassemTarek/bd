import React from "react";
import { TypeAnimation } from "react-type-animation";

const Qoute3 = () => {
    return (
        <div className="flex flex-1 items-center justify-center p-4">
            <TypeAnimation
                sequence={[
                    `تس يا أجمل كتكوتة في العالم ،كل سنة وأنتِ في حياتي يا أجمل حاجة حصلت لي! 💖 كل لحظة معاكِ بتكون أجمل من التانية، وعايزك تبقي دايمًا فرحانة ومبسوطة، حتى لو مش معايا. الحياة تستاهل كل حب الدنيا عشانك، وأنا بدعي لكِ دايمًا إنك تعيشي أجمل حياة، مليانة حب وسعادة. حبك هو أغلى حاجة عندي في الدنيا، ومش هوقف أدعي لكِ بكل خير. 💕`
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
