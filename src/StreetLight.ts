import "./canvas.css";
import "./styles.css";
import "babylonjs";

const body = document.getElementsByTagName("body")[0];

const canvas = document.createElement("canvas");

const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true
});

const createScene = () => {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    (3 * Math.PI) / 2,
    Math.PI / 2.2,
    50,
    BABYLON.Vector3.Zero(),
    scene
  );

  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight(
    "hemi",
    new BABYLON.Vector3(0, 50, 0),
    scene
  );

  light.intensity = 0.5;

  const lampLight = new BABYLON.SpotLight(
    "lampLight",
    BABYLON.Vector3.Zero(),
    new BABYLON.Vector3(0, -1, 0),
    Math.PI,
    1,
    scene
  );

  lampLight.diffuse = BABYLON.Color3.Yellow();

  const lampShape = [];

  for (let i = 0; i < 20; i++) {
    lampShape.push(
      new BABYLON.Vector3(
        Math.cos((i * Math.PI) / 10),
        Math.sin((i * Math.PI) / 10),
        0
      )
    );
  }
  lampShape.push(lampShape[0]);

  const lampPath = [];
  lampPath.push(new BABYLON.Vector3(0, 0, 0));
  lampPath.push(new BABYLON.Vector3(0, 10, 0));

  for (let i = 0; i < 20; i++) {
    lampPath.push(
      new BABYLON.Vector3(
        1 + Math.cos(Math.PI - (i * Math.PI) / 40),
        10 + Math.sin(Math.PI - (i * Math.PI) / 40),
        0
      )
    );
  }

  lampPath.push(new BABYLON.Vector3(3, 11, 0));

  const yellowMat = new BABYLON.StandardMaterial("yellowMat");
  yellowMat.emissiveColor = BABYLON.Color3.Yellow();

  const lamp = BABYLON.MeshBuilder.ExtrudeShape("lamp", {
    cap: BABYLON.Mesh.CAP_END,
    shape: lampShape,
    path: lampPath,
    scale: 0.5
  });

  const lamp2 = BABYLON.MeshBuilder.ExtrudeShape("lamp2", {
    cap: BABYLON.Mesh.CAP_END,
    shape: lampShape,
    path: lampPath,
    scale: 1,
  })

  const bulb = BABYLON.MeshBuilder.CreateSphere("bulb", {
    diameterX: 1.5,
    diameterZ: 0.8
  });

  bulb.material = yellowMat;
  bulb.parent = lamp;
  bulb.position.x = 2;
  bulb.position.y = 10.5;

  lampLight.parent = bulb;

  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 50,
    height: 50
  });

  return scene;
};

let scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});

body.appendChild(canvas);
