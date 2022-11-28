import { useEffect, createRef } from 'react';
import styles from './style.module.scss'

import * as THREE from "three"
import { createSphere, createClouds, createStars } from '../../../lib/Globe'

export default function Globe(){

  const webgl = createRef()

  useEffect(()=>{

    const width = window.innerWidth
    const height = window.innerHeight * 1.5

    const radius = 0.5
    const segments = 64
    const angle = 5.5
    const position = window.innerWidth < 768 ? -0.4 : -0.2
    const rotation = 0.2 / 864; //86400; 200x velocidade da terra

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000)
    camera.position.z = window.innerWidth < 768 ? 1.6 : 1.1

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const light = new THREE.DirectionalLight(0xaaaaaa, 2);
    light.position.set(5, 5, -3);
    
    const sphere = createSphere(radius, segments);
    sphere.rotation.y = angle;
    sphere.rotation.x = -0.4
    sphere.position.y = position
    
    const clouds = createClouds(radius, segments);
    clouds.rotation.y = angle;
    clouds.rotation.x = -0.4;
    clouds.position.y = position
    
    //const stars = createStars(90, 64);
    const webglEl = webgl.current

    webglEl.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0x020202));
    scene.add(light)
    scene.add(sphere)
    scene.add(clouds)
    //scene.add(stars);

    const animation = setInterval(()=>{
      sphere.rotation.y += rotation
      sphere.rotation.x -= rotation
      clouds.rotation.y += rotation * 1.8
      clouds.rotation.x -= rotation * 1.5
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
