import "./styles.css";
import "./canvas.css";
import { fallbackTo } from "./util";
import "babylonjs";

const body = document.getElementsByTagName("body")[0];

const canvas: HTMLCanvasElement = document.createElement("canvas");

const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true
});

const createScene = () => {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new BABYLON.Vector3(0, 0, 0)
  );

  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  const box = BABYLON.MeshBuilder.CreateBox("box", {});

  return scene;
};

let scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});

interface BabylonCanvas {
  engine : BABYLON.Engine,
  scene : BABYLON.Scene
}

function renderCanvas(bc : BabylonCanvas) {
  
  const canvas : HTMLCanvasElement = document.createElement("canvas")

  engine.runRenderLoop(() => {
    scene.render()
  })

  window.addEventListener("resize", () => {
    engine.resize()
  })

  return canvas
}

// body.appendChild(renderCanvas({ engine, scene }));

body.appendChild(canvas)

body.appendChild(fallbackTo("index.html"));
