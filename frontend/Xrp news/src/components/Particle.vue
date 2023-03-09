<template>
	<div>
		<Particles
			id="tsparticles"
			:particlesInit="particlesInit"
			:particlesLoaded="particlesLoaded"
			:options="{
				background: {
					color: {
						value: transparent,
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 100,
							duration: 2,
							opacity: 0.1,
							size: 10,
						},
						push: {
							quantity: 0,
						},
						repulse: {
							distance: 500,
							duration: 8,
						},
					},
				},
				particles: {
					color: {
						value: '#00000',
					},
					links: {
						color: '#00FFFF',
						distance: 150,
						enable: true,
						opacity: 0.7,
						width: 1,
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: {
							min: 2,
							max: 3,
						},
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						random: true,
						value: 10,
					},
				},
				detectRetina: true,
			}"
		/>
	</div>
</template>

<script setup>
import { loadFull } from 'tsparticles';

const particlesInit = async (engine) => {
	await loadFull(engine);
};

const particlesLoaded = async (container) => {
	console.log('Particles container loaded', container);
};
</script>
