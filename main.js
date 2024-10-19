import { Application } from "@splinetool/runtime";

// make sure you have a canvas in the body
const canvas = document.getElementById("canvas3d");

// start the application and load the scene
const spline = new Application(canvas);
spline.load("https://prod.spline.design/6uvptqZu3DvpoRQm/scene.splinecode");
