var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

// Size renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Add element to body
document.body.appendChild(renderer.domElement);

// Set up the cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

// Add cube to scene
scene.add(cube);

// Move the camera to a better viewpoint
camera.position.z = 5;

// Render loop
function render() {
  requestAnimationFrame(render);

  // Rotate cube
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
}
render();
