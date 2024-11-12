// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, loader;
let sceneContainer = document.querySelector("#scene-container");
let wall, particles;

let controls;

//Initialization function that runs at the start of the script
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth/sceneContainer.clientHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
    });
    
    // scene is parented to a container and constrained to that size
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    sceneContainer.appendChild(renderer.domElement);
    
    loadAddons();
    loadScene();
}

//Preloads the addons
function loadAddons(){
   //controls = new OrbitControls(camera, renderer.domElement);
//    loader = new GLTFLoader(); // to load 3d models
}

function createWall(){
    const geom = new THREE.PlaneGeometry(16, 14);
    const tex = new THREE.TextureLoader().load('/assets/tex_wall.jpg');
    const mat = new THREE.MeshBasicMaterial({
        map: tex,
        color: 0x161e30
    });
    
    wall = new THREE.Mesh(geom, mat);
    scene.add(wall);
}
                                                     
function createBugs(){
    //Setting up particle geometry and position of particles
    const geo = new THREE.BufferGeometry();
    const count = 500;
    
    const posArray = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++){
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    geo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    //Textures
    const tex = new THREE.TextureLoader().load("/assets/tex_firefly.png");
    
    //Material
    const mat = new THREE.PointsMaterial({
        size: 0.5,
        transparent: true,
        map: tex
    });
    
    //Initialization
    particles = new THREE.Points(geo, mat);
    scene.add(particles);
    
    particles.position.z = -2;
}

//Sets up the scene itself
function loadScene(){
    createWall();
    createBugs();
    
    camera.position.z = 5;
}

//Update loop that happens every frame
function update(){
    particles.rotation.y += 0.01;
    
    //Renders new frame and calls next frame
    renderer.render(scene, camera);
    requestAnimationFrame(update);
}

//Adjusts the camera when the window resizes
function onWindowResize(){
    camera.aspect = sceneContanier.clientWidth/sceneContanier.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContanier.clientWidth, sceneContanier.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
update();
    
// ~~~~~~~~~Extra Stuff~~~~~~~~~~ //
    
//Math thing to help me
function DegreeToRadians(degree){
    let radian = degree * (Math.PI/180);
    return radian;
}
