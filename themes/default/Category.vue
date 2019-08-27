<template>
	<div>
		<h1>{{category.name}}</h1>

		<section v-for="post in posts">
			<nuxt-link :to="{params: {post: post.path}, name: 'category-post'}">{{post.title}}</nuxt-link>
			<div v-html="post.short"></div>
		</section>
	</div>
</template>

<script>
	export default {
		props: {
			category: Object,
			posts: Array,
		},
	}
</script>

<style scoped>
	h1 {
		padding: 10px;
	}
	section {
		padding: 10px;
		margin: 10px;
		border-top: 1px solid #ccc;
		border-radius: 5px;
	}
</style>
