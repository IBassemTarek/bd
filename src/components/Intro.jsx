import React, { useEffect, useState } from "react";
import { config, useTransition, animated } from "react-spring";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useNavigate, useOutletContext } from "react-router-dom";
import ShowAfter from "./ShowAfter";
function Effect() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

const Intro = () => {
  const [index, setIndex] = useState(1);
  const navigate = useNavigate();
  const { images , nextAudio } = useOutletContext();
  const transitions = useTransition(index, {
    from: {
      opacity: 0,
      transform: "translateX(100%) scale(0.5)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%) scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%) scale(0.5)",
    },
    config: config.slow,
  });

  useEffect(() => {
    const id = setInterval(() => {
      if (index === 14) {
        setIndex(1);
      } else {
        setIndex((i) => i + 1);
      }
    }, 3000);

    return () => clearInterval(id);
  }, [index]);

  const handleClick = () => {
    navigate("/q1");
    nextAudio();
  }

  return (
    <>
      <Effect />
      <div className="flex-1 flex items-center justify-center p-4 z-50 ">
        {transitions((styles, i) => {
          return (
            <animated.img
              className="max-h-[400px] p-4 m-auto absolute translate-y-[-50%] translate-x-[-50%]"
              key={i}
              src={images[i].src}
              style={styles}
            />
          );
        })}

        <ShowAfter
          time={23000}
          text={"Click Me..."}
          onClick={handleClick}
          className="uppercase absolute translate-x-[-50%] bottom-[32px] text-xl"
        />
      </div>
    </>
  );
};

export default Intro;
