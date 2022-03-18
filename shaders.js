import * as THREE from 'three';

const vertexShaderSource = `
	${THREE.ShaderChunk.common}
	${THREE.ShaderChunk.logdepthbuf_pars_vertex}

void main() {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  ${THREE.ShaderChunk.logdepthbuf_vertex}
}`;


const fragmentShaderSource = `
  precision mediump float;
  ${THREE.ShaderChunk.logdepthbuf_pars_fragment}

  uniform float u_time;

  void main() {

  gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
  ${THREE.ShaderChunk.logdepthbuf_fragment}
}`;

export { vertexShaderSource, fragmentShaderSource}
