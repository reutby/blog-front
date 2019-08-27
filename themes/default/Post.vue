<template>
	<div>
		<PostBreadcrumbs :post="post"/>
		<article>
			<h1>{{post.title}}</h1>
			<section class="post-short" v-html="post.short"></section>
			<section class="post-content" v-html="post.content"></section>
		</article>
	</div>
</template>

<script>
	import PostBreadcrumbs from './components/PostBreadcrumbs';

	export default {
		props: {
			post: Object,
		},
		components: {PostBreadcrumbs}
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
