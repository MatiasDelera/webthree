import * as THREE from 'three';
import 'bootstrap';
import './css/styles.css';

// Configuración de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth * 0.3, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Crear un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    const width = window.innerWidth * 0.3;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
