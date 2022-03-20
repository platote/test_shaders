import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp, useFrame} = metaversefile;
import { vertexShaderSource, fragmentShaderSource } from './shaders.js';

export default e => {
  const app = useApp();

  /*
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/platote_assets/shaders/textures/Paper_Wrinkled_001_basecolor.jpg');
  console.log(texture.repeat);
  texture.repeat.x = 0.2;
  texture.repeat.y = 0.2;
  console.log(texture.repeat);
  */


  const material = new THREE.ShaderMaterial({
    vertexShader : vertexShaderSource,
    fragmentShader : fragmentShaderSource,
    side : THREE.DoubleSide,
    transparent : true,
    uniforms : {
      u_time : {value : 0}
   //   u_texture : {value : texture}
    }
  });
  
  const width = 2;
  const height = 0.5;

  const planeGeometry = new THREE.PlaneGeometry(width, height,15,3);
  let localQuaternion = new THREE.Quaternion();
  let localMatrix = new THREE.Matrix4();
  localQuaternion.setFromAxisAngle(new THREE.Vector3(1,0,0), Math.PI / 2);
  planeGeometry.applyQuaternion(localQuaternion);
  planeGeometry.applyMatrix4(localMatrix.makeTranslation(width/2 + 0.2,1,0));

  const plane = new THREE.Mesh( planeGeometry,material);

  const aile_02 = new THREE.Mesh(planeGeometry, material);
  aile_02.scale.multiply(new THREE.Vector3(-1, 1, 1));
  /*
  aile_02.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
  */

  app.add(plane);
  app.add(aile_02);
  app.updateMatrixWorld();

  const clock = new THREE.Clock();

  useFrame( () => 
  {
    const elapsedTime = clock.getElapsedTime();
    material.uniforms.u_time.value = elapsedTime;
  })

  return app;
}
