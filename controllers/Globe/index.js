import * as THREE from "three"

export function createSphere(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('globe/rsz_world.jpg'),
      bumpMap: new THREE.TextureLoader().load('globe/rsz_bump.jpg'),
      bumpScale: 0.003,
      specularMap: new THREE.TextureLoader().load('globe/rsz_water.png'), // 2048	x	1024
      specular: new THREE.Color(0x111111),
      refractionRatio: 0.0001,
      reflectivity: 0.0001
    })
  );
}

export function createClouds(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius + 0.003, segments, segments),
    new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('globe/rsz_clouds.png'),
      transparent: true
    })
  );
}
