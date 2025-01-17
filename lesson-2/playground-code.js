var createScene = function () {
    // STEP 1: Create a new scene object, and pass in the Babylon engine
    const scene = new BABYLON.Scene(engine);
    // STEP 2a: Build a new Arc Rotate Camera
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    // STEP 2b: Attach camera control to canvas
    camera.attachControl(canvas, true);
    // STEP 3: Add a new light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    // STEP 4: Build a mesh object (a simple box will do)
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    // STEP 5: Return the scene object
    return scene;
};