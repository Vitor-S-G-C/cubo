const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth ,  window.innerHeight);
document.body.appendChild(renderer.domElement);//link do renderizador

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color:0x00ff00});//Colocando uma cor
const cubo = new THREE.Mesh(geometry,material);//Colocandoa cor e o formato

scene.add(cubo);//adicionei o cubo na tela

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    cubo.rotation.x+=0.01;
    cubo.rotation.y+=0.01;
    renderer.render(scene, camera);
}

animate();



