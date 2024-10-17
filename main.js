import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize Spline application
const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
spline.load("https://prod.spline.design/6uvptqZu3DvpoRQm/scene.splinecode");

// Once the scene is loaded, proceed with the GSAP animation
spline.on("load", () => {
  // Assuming the object has a name like 'objectName', you can find it by name
  const object = spline.findObjectByName("Rectangle 2");

  if (object) {
    // Create a timeline for the scroll animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#page2",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(object.position, {
        x: -5, // Move the object to the left (you can adjust the values)
        duration: 1,
      });
  }
});
