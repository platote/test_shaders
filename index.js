import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp} = metaversefile;
import { vertexShaderSource, fragmentShaderSource } from './shaders.js';

export default e => {
  const app = useApp();

  const material = new THREE.ShaderMaterial({
    vertexShader : vertexShaderSource,
    fragmentShader : fragmentShaderSource,
    side : THREE.DoubleSide
  });
  

  const planeGeometry = new THREE.PlaneGeometry(1,1,3,3);
  planeGeometry.translate(0,0.5,0)

  const plane = new THREE.Mesh( planeGeometry,material);

  app.add(plane);
  app.updateMatrixWorld();

  return app;
}