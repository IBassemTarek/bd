import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ShowAfter from "./ShowAfter";

const Qoute2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <TypeAnimation
        sequence={[
          `Happy birthday, my love! 💖 \n It feels like our hearts speak without words, like you can feel me even in silence. I'm so blessed to share this deep connection with you. You are my perfect match, and I love you endlessly. 💕`,
        ]}
        wrapper="div"
        cursor={true}
        repeat={0}
        speed={200}
        className="text-xl max-w-sm text-center"
      />
      <ShowAfter
        time={21000}
        text={"Click me to continue ->"}
        onClick={() => navigate("/q3")}
        className="absolute translate-x-[-50%] bottom-[32px] "
      />
    </div>
  );
};

export default Qoute2;
