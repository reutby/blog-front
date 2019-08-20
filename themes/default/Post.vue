<template>
	<article>
		<h1>{{post.title}}</h1>
		<section class="post-short" v-html="post.short"></section>
		<section class="post-content" v-html="post.content"></section>
	</article>
</template>

<script>
	export default {
		props: {
			post: Object,
		}
	}
</script>

<style scoped>
	.post-short {
		font-weight: bold;
	}

	.post-content {
		padding: 20px;
	}
</style>
