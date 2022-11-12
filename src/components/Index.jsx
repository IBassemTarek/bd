import React from "react";
import { useNavigate } from "react-router-dom";
import { useAudioContext } from "./Layout";
const Index = () => {
  const navigate = useNavigate();
  const { playAudio } = useAudioContext();
  function handleStart() {
    playAudio();
    navigate("/intro");
  }
  return (
    <div className="flex flex-1 items-center justify-center">
      <button onClick={handleStart} className="font-bold text-xl">
        Click Here to start your journey {"<3"}
      </button>
    </div>
  );
};

export default Index;
