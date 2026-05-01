import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 70, density: { enable: true, area: 900 } },
    color: { value: ["#a78bfa", "#60a5fa", "#c084fc", "#7dd3fc"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.8 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 0.6, max: 2.4 } },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    links: {
      enable: true,
      distance: 130,
      color: "#8b5cf6",
      opacity: 0.18,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.45 } },
    },
  },
  detectRetina: true,
};

const ParticleField = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const noop = useCallback(async () => {}, []);

  if (!ready) return null;
  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={options}
      particlesLoaded={noop}
    />
  );
};

export default ParticleField;
