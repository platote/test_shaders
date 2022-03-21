import * as THREE from 'three';

const vertexShaderSource = `
	${THREE.ShaderChunk.common}

  varying vec2 vUv;

	${THREE.ShaderChunk.logdepthbuf_pars_vertex}
  uniform float u_time;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += abs(pow(modelPosition.x, 3.0))/2.0  * sin(u_time * 3.0)  / 8.0 ;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
  vUv = uv;
  ${THREE.ShaderChunk.logdepthbuf_vertex}
}`;


const fragmentShaderSource = `
  precision mediump float;
  ${THREE.ShaderChunk.logdepthbuf_pars_fragment}

  // uniform sampler2D uTexture;

  varying vec2 vUv;

  void main() {

  // vec4 textureColor = texture2D(uTexture, vUv);
  // gl_FragColor = textureColor;
  gl_FragColor = vec4(0.11, 0.88, 1.0, 0.5);
  ${THREE.ShaderChunk.logdepthbuf_fragment}
}`;

export { vertexShaderSource, fragmentShaderSource}
