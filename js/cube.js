// Cube rotation
var stop = false;
var height = window.innerHeight * 0.9;
var width = window.innerWidth;
var scene, camera, renderer, cube;

$(".stop-button").click(function() {
  stop = !stop;
  $(this).html(stop ? "Resume" : "Stop");
});

$(window).resize(resize);

init();
animate();

// Setup scene
function init() {
  // Set up renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // Setup camera
  camera = new THREE.PerspectiveCamera(75,
     width / height,
     0.1,
     1000);
  camera.position.z = 300;
  camera.position.y = 50;

  scene = new THREE.Scene();

  // Set up the cube
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var base_url = "img/dice_faces/die";
  var materials = [
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "1.png")}),
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "6.png")}),
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "3.png")}),
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "4.png")}),
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "2.png")}),
    new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(base_url + "5.png")})
  ];
  var material = new THREE.MeshFaceMaterial(materials);

  var cubes = [];
  for (i=0; i<5; i++) {
    var spacing = (width/2) / 6;

    cube = new THREE.Mesh(geometry, material);
    cube.rotation.y = Math.PI / i;
    cube.position.x = (spacing * (i - 3));
    scene.add(cube);
    cubes.push(cube);
  }

  // Ambient lighting
  var light = new THREE.AmbientLight(0xFFFFFF);
  scene.add(light);

  // Directional lighting
  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight * 0.9;
  renderer.setSize(width, height);

  camera.aspect = width/height;
  camera.updateProjectionMatrix();
}

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  // cube.rotation.x += 0.1;
  // if (!stop) {
  //   cube.rotation.y += 0.01;
  // }

  renderer.render(scene, camera);
}
