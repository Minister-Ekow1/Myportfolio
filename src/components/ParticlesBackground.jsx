import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "../context/ThemeContext";

function ParticlesBackground() {
  const { darkMode } = useTheme();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  /* Fewer, subtler particles in light mode */
  const color     = darkMode ? "#22d3ee" : "#0891b2";
  const opacity   = darkMode ? 0.25      : 0.15;
  const linkOpacity = darkMode ? 0.15    : 0.08;
  const count     = darkMode ? 55        : 40;

  return (
    <Particles
      key={darkMode ? "dark" : "light"}   /* re-init on theme change */
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: { enable: true,  mode: "grab"  },
            onClick: { enable: true,  mode: "push"  },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.35 } },
            push: { quantity: 2 },
          },
        },

        particles: {
          color:  { value: color },

          links: {
            color,
            distance: 140,
            enable:   true,
            opacity:  linkOpacity,
            width:    1,
          },

          move: {
            direction:  "none",
            enable:     true,
            outModes:   { default: "bounce" },
            speed:      0.6,          /* slightly slower = calmer */
            random:     true,
            straight:   false,
          },

          number: {
            density: { enable: true, area: 900 },
            value:   count,
          },

          opacity: {
            value:     opacity,
            animation: {
              enable:   true,
              speed:    0.6,
              minimumValue: 0.05,
              sync:     false,
            },
          },

          shape: { type: "circle" },

          size: {
            value:     { min: 1, max: 3 },
            animation: {
              enable:   true,
              speed:    1.5,
              minimumValue: 0.5,
              sync:     false,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;