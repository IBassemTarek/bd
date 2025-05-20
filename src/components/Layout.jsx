import React, { useRef, useReducer, useState } from "react";
import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Loader from "./Loader";

// at public
const media = [
  { url: "/images/1-min.jpg" },
  { url: "/images/2-min.jpg" },
  { url: "/images/3-min.jpg" },
  { url: "/images/4-min.jpg" },
  { url: "/images/5-min.jpg" },
  { url: "/images/6-min.jpg" },
  { url: "/images/7-min.jpg" },
  { url: "/images/8-min.jpg" },
  { url: "/images/9-min.jpg" },
  { url: "/images/10-min.jpg" },
];

const Layout = () => {
  const [isLoaded, loaded] = useReducer(() => true, false);
  const [images, setImages] = useState([]);
  const audioRef = useRef();
  const playAudio = () => audioRef.current.play();
  const pauseAudio = () => audioRef.current.pause();
  // next audio
  const nextAudio = () => {
    pauseAudio();
    const nextAudio = new Audio();
    nextAudio.src = "/songs/1.mp3";
    nextAudio.loop = true;
    nextAudio.play();
    audioRef.current = nextAudio
  }

  useEffect(() => {
    // preload images and audio

    const imagesPromises = media.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.url;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (err) => {
          reject(err);
        };
      });
    });

    const audioPromise = new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.src = "/songs/2.mp3";
      audio.loop = true;
    
      audio.onplay = () => {
        audio.currentTime = 7;
      };
    
      audio.oncanplaythrough = () => {
        resolve(audio);
      };
    
      audio.onerror = (err) => reject(err);
    
      audio.onended = () => {
        // When "/songs/2.mp3" ends, start playing "/songs/1.mp3"
        const nextAudio = new Audio();
        nextAudio.src = "/songs/1.mp3";
        nextAudio.loop = true;
        nextAudio.play();
        audioRef.current = nextAudio;  // Optionally store the new audio reference
      };
    
      audioRef.current = audio;
      audio.play();
    });
    

    Promise.all([...imagesPromises, audioPromise]).then((s) => {
      s.pop();
      setImages(s);
      loaded();
    });
  }, []);
  return (
    <div className="flex-1 flex">
      {isLoaded ? (
        <Outlet context={{ playAudio, pauseAudio,nextAudio, images }} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
export const useAudioContext = () => {
  const routerContext = useOutletContext();
  return {
    playAudio: routerContext.playAudio,
    pauseAudio: routerContext.pauseAudio,
  };
};
export default Layout;
