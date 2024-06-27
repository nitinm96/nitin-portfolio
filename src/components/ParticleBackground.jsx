import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import "../index.css";
function ParticleBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    //console.log(container);
  };
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            value_area: 631.3280775270874,
          },
        },
        color: {
          value: ["#0478FF", "#57c9fa", "#57e2fa"],
        },
        shape: {
          type: ["circle", "square", "triangle"],
          polygon: [
            {
              sides: 5,
            },
            {
              sides: 6,
            },
            {
              sides: 8,
            },
          ],
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 25,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "random",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        rotate: {
          value: 1, // Adjust the rotation speed
          random: true,
          direction: "random",
          animation: {
            enable: false,
            speed: 30,
            sync: false,
          },
        },
      },
      interactivity: {
        // ... (other interactivity settings)
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }
}
export default ParticleBackground;
