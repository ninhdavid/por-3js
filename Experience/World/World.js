import * as THREE from 'three';
import Room from './Room.js';
import Experience from '../Experience.js';

export default class World {
	constructor() {
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.camera = this.experience.camera;

		this.room = new Room();
	}

	setRenderer() {}
	resize() {}

	update() {}
}
