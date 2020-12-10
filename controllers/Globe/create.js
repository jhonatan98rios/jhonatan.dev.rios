import * as THREE from "three"

export function createSphere(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('globe/world.jpg'),
      bumpMap: new THREE.TextureLoader().load('globe/bump.jpg'),
      bumpScale: 0.002,
      specularMap: new THREE.TextureLoader().load('globe/water.png'),
      specular: new THREE.Color('grey')
    })
  );
}

export function createClouds(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius + 0.003, segments, segments),
    new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('globe/clouds.png'),
      transparent: true
    })
  );
}

export function createStars(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('globe/galaxy2.jpg'),
      side: THREE.BackSide
    })
  );
}
