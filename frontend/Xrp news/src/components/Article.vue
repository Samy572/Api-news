<template>
	<div class="article">
		<a class="news" v-for="(news, index) in products" :key="index" :href="news.url" target="_blank">
			<p class="title-news">{{ news.title }}</p>
			<span class="time">{{ news.time }}</span>
		</a>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
let products = ref([]);
console.log(products);
const options = {
	method: 'GET',
};
onMounted(() => {
	fetch('http://localhost:5500/api', options)
		.then((response) => response.json())
		.then((data) => (products.value = data));
});
</script>
<style scoped lang="scss">
@import '../assets/base.scss';

.article {
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px;
}

.news {
	height: 150px;
	margin: 10px 10px;
	display: flex;
	width: 550px;
	align-items: center;
	flex-wrap: wrap;
	border: solid 1px aqua;
	border-radius: 5px;
	animation: appear 1s forwards;
	&:hover {
		color: aqua;
	}
}

.title-news {
	padding-left: 20px;
	font-size: 20px;
	font-family: 800;
}

.news-url {
	padding-left: 20px;
	text-decoration: none;
	color: aqua;
}

.time {
	width: 100%;
	text-align: end;
	margin-right: 25px;
}

.list-enter-active,
.list-leave-active {
	transition: all 0.5s;
}

.list-enter,
.list-leave-to {
	opacity: 1;
	transform: translateY(30px);
}

@keyframes appear {
	0% {
		transform: translateY(-1000%);
	}
	100% {
		transform: translateY(0);
	}
}

@media screen and (max-width: 750px) {
	h2 {
		text-align: center;
		font-size: 25px;
		padding: 0;
	}
	.article {
		margin: 10px 1px;
	}
	.news {
		width: 90%;
		height: 200px;
		padding: 10px;
		a {
			padding: 0;
		}
	}
}
</style>
