import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize Spline application
const canvas = document.getElementById("canvas3ds");
const spline = new Application(canvas);

// Load the Spline scene and set up the animation
spline
  .load("https://prod.spline.design/60bmf97LcGdPYIAR/scene.splinecode")
  .then(() => {
    const keyboard = app.findObjectByName("keyboard");

    gsap.set(keyboard.scale, { x: 1, y: 800, z: 1 });
    gsap.set(keyboard.position, { x: 110, y: 50 });

    let rotateKeyboard = gsap.to(keyboard.rotation, {
      y: Math.PI * 2 + keyboard.rotation.y,
      x: 0,
      z: 0,

      repeat: -1,
      ease: "none",
    });
  });
