import * as THREE from "three"

function loadTexture(url, renderer, isColor) {
  const texture = new THREE.TextureLoader().load(url)
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
  if (isColor) texture.encoding = THREE.sRGBEncoding
  return texture
}

export function createSphere(radius, segments, renderer) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.MeshPhongMaterial({
      map: loadTexture('/globe/world-upscaled.jpg', renderer, true),
      bumpMap: loadTexture('/globe/bump-upscaled.jpg', renderer),
      bumpScale: 0.003,
      specularMap: loadTexture('/globe/water-upscaled.png', renderer),
      specular: new THREE.Color(0x111111),
      refractionRatio: 0.0001,
      reflectivity: 0.0001
    })
  );
}

export function createClouds(radius, segments, renderer) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius + 0.003, segments, segments),
    new THREE.MeshPhongMaterial({
      map: loadTexture('/globe/clouds-upscaled.png', renderer),
      transparent: true
    })
  );
}
