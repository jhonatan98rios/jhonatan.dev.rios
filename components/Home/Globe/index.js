import { useEffect, useRef } from 'react';
import styles from './style.module.scss'

import * as THREE from "three"
import { createSphere, createClouds, createStars } from '../../../controllers/Globe/create'

export default function Globe(){

  const webgl = React.createRef()

  useEffect(()=>{

    const width = window.innerWidth
    const height = window.innerHeight * 1.5

    const radius = 0.5
    const segments = 32
    const rotation = 6

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000)
    camera.position.z = 1.1

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const light = new THREE.DirectionalLight(0x888888, 2);
    light.position.set(5, 5, -3);
    
    const sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation;
    sphere.position.y = -0.2
    
    const clouds = createClouds(radius, segments);
    clouds.rotation.y = rotation;
    clouds.position.y = -0.2
    
    //const stars = createStars(90, 64);
    const webglEl = webgl.current

    webglEl.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0x010101));
    scene.add(light)
    scene.add(sphere)
    scene.add(clouds)
    //scene.add(stars);

    const animation = setInterval(()=>{
      sphere.rotation.y += 0.2 / 864; //86400; 200x velocidade da terra
      clouds.rotation.y += 0.25 / 864; //86400;	
      renderer.render(scene, camera);
    }, 50)

    return ()=> clearInterval(animation)

  }, [])

  return (
    <section>
      <div ref={webgl} className={styles.webgl}></div>
    </section> 
  )
}
