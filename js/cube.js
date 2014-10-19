// Cube rotation
var stop = false;
var scene, camera, renderer, cube;

$(".stop-button").click(function() {
  stop = !stop;
});

init();
animate();

// Setup scene
function init() {
  // Set up renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
  document.body.appendChild(renderer.domElement);

  // Setup camera
  camera = new THREE.PerspectiveCamera(75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000);
  camera.position.z = 300;
  camera.position.y = 50;

  scene = new THREE.Scene();

  // Set up the cube
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var materials = [];
  for (i=1; i<=6; i++) {
    var path = "img/dice_faces/die" + String(i) + ".png";
    materials.push(new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture(path)
    }));
  }
  var material = new THREE.MeshFaceMaterial(materials);
  // var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("img/dice_faces/die1.png")});
  // var material = new THREE.MeshLambertMaterial({color: 0x00FF00});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Ambient lighting
  var light = new THREE.AmbientLight(0xFFFFFF);
  scene.add(light);

  // Directional lighting
  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);
}

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  // cube.rotation.x += 0.1;
  if (!stop) {
    cube.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}
