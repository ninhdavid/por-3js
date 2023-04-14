import * as THREE from 'three';
import Camera from './Camera';
import Sizes from './utils/Sizes';
import Renderer from './Renderer';
import Time from './utils/Time';
import World from './World/World';

export default class Experience {
	static instance;
	constructor(canvas) {
		if (Experience.instance) {
			return Experience.instance;
		}
		Experience.instance = this;
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.world = new World();

		this.sizes.on('update', () => {
			this.resize();
		});
		this.time.on('update', () => {
			this.update();
		});
	}

	resize() {
		this.camera.resize();
		this.renderer.resize();
	}
	update() {
		this.camera.update();
		this.renderer.update();
	}
}
