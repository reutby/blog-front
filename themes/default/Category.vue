<template>
	<div>
		<h1>{{category.name}}</h1>

		<section v-for="post in posts">
			{{post.title}}
			<nuxt-link :to="{params: {post: post.path}, name: 'category-post'}">link</nuxt-link>
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

<style>

</style>
