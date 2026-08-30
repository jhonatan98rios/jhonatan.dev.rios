import { useEffect, useRef } from 'react';

import * as THREE from "three"
import { createSphere, createClouds } from '../../../lib/Globe'

export default function Globe(){

  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(()=>{

    const container = containerRef.current
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const radius = 0.5
    const segments = 64
    const rotation = 0.2 / 864 // mesma velocidade da versão antiga (tick de 50ms)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)
    camera.position.z = 2.2

    const light = new THREE.DirectionalLight(0xaaaaaa, 2);
    light.position.set(5, 5, -3);
    
    const sphere = createSphere(radius, segments, renderer);
    sphere.rotation.y = 5.5;
    sphere.rotation.x = -0.4
    sphere.position.y = 0.3
    
    const clouds = createClouds(radius, segments, renderer);
    clouds.rotation.y = 5.5;
    clouds.rotation.x = -0.4;
    clouds.position.y = 0.3

    scene.add(new THREE.AmbientLight(0x020202));
    scene.add(light)
    scene.add(sphere)
    scene.add(clouds)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()

    let raf
    let last = performance.now()
    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const t = Math.min(now - last, 100) / 50
      last = now
      sphere.rotation.y += rotation * t
      sphere.rotation.x -= rotation * t
      clouds.rotation.y += rotation * 1.8 * t
      clouds.rotation.x -= rotation * 1.5 * t
      renderer.render(scene, camera);
    }
    tick(performance.now())

    const observer = new ResizeObserver(resize)
    observer.observe(container)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
