<template>
	<div class="header">
		<div class="title">
			<h1>Ripple & Xrp news <span>24/7</span></h1>
		</div>
		<nav>
			<ul>
				<li><Router-link to="/">News</Router-link></li>
				<li><Router-link to="/About">About</Router-link></li>
			</ul>
		</nav>
	</div>
	<div class="images">
		<img src="../assets/images/xrp-logo.svg" alt="xrp-coin" />
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.header {
	width: 100%;
	height: 250px;
	padding: 0 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	color: aqua;
	height: 200px;
	h1 {
		font-size: clamp(1rem, 2.5vw, 2rem);
	}
	ul {
		padding-right: 20px;
		list-style-type: none;
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 20%;
	  
		a {
			display: flex;
			text-decoration: none;
			font-size: 18px;
			color: #f2f2f2;
			margin: 20px;
			padding: 3px;
		}
	}
}
.images {
	padding: 40px 0;
	display: flex;
	justify-content: center;
	width: 100%;
	opacity: 0;
	animation: drop 0.5s forwards;
	animation-delay: 0.6s;
	img {
		width: 220px;
		height: auto;
	}
}

@media (hover: hover) {
	a:hover {
		background-color: rgba(0, 255, 255, 0.4);
	}
}

@keyframes drop {
	from {
		transform: translateY(-550px);
	}
	to {
		transform: translate(0);
		opacity: 1;
	}
}

@media screen and (max-width: 750px) {
	.header {
		padding: 0;
	}
	.title {
		display: flex;
		width: 100%;
		justify-content: center;
		h1 {
			font-size: 25px;
		}
	}
	nav {
		width: 750px;
		display: flex;
		justify-content: center;

		a[data-v-c6efbeae] {
			margin: 0 20px 0 5px;
			padding: 0;
		}
		ul {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
} ;
</style>
