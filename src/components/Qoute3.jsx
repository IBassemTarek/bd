import React from "react";
import { TypeAnimation } from "react-type-animation";

const Qoute3 = () => {
    return (
        <div className="flex flex-1 items-center justify-center p-4">
            <TypeAnimation
                sequence={[
                    `هفضل رحال ما أعرفش محال وراكي لو حتى في آخر الدنيا في وسط جبال في الأصل محارب، بس بغني ويمكن صوتي يوصل لك أسرع مني والسكة تهون ويكون ما يكون لو مئة فيضان أنا هعرف أعدي أجي لك عوم`,
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
