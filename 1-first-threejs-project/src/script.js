import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('canvas.webgl');

//Sceme
const scene = new THREE.Scene();

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.addEventListener('resize', () => {
    size.width =  window.innerWidth;
    size.height = window.innerHeight;

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);


const controls = new OrbitControls(camera, canvas);
const enableDamping = true;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();
const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}
tick ()
