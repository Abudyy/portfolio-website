// src/components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0); // the default
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Add the ambient lighting (the neon affect will not work )
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    // Load GLTF model from the website we used
    const loader = new GLTFLoader();
    loader.load('/models/vaporwave_littlest_tokyo_-_3d_editor_challenge/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Adjust model position and scale (IMP! this is to scale and move it)
      model.position.set(0, 0, 0); // Move the model down a bit
      model.scale.set(0.02, 0.02, 0.02); // Scale the model down

      // Set up animations
      const mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      // Animate the model
      const animate = () => {
        requestAnimationFrame(animate);
        mixer.update(0.01); // Update the animation mixer
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('An error happened', error);
    });

    // these are the orbit controls, 
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 2;
    controls.maxDistance = 20;
    //make the max polar angle set to pi / 2, 90 deg
    controls.maxPolarAngle = Math.PI / 2;

    camera.position.set(10, 2, 20); // Adjust the camera position, (IMP! this will be the position that u view the scene)

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px', position: 'relative' }} />;
};

export default ThreeScene;