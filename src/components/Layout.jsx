import React, { useRef, useReducer, useState } from "react";
import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Loader from "./Loader";

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
      audioRef.current = audio;
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
        <Outlet context={{ playAudio, pauseAudio, images }} />
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
