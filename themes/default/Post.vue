<template>
	<div>
		<PostBreadcrumbs :post="post"/>
		<article class="post">
			<h1>{{post.title}}</h1>
			<small class="created">{{post.created | dateTime}}</small>

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
		components: {PostBreadcrumbs},
		head() {
			return {
				title: this.post.title + ' - ' + this.post.category.name,
				meta: [
					{ vmid: 'description', name: 'description', content: this.post.title }
				]
			}
		}
	}
</script>

<style scoped>
	.post {
		padding: 10px;
	}

	.post-short {
		font-weight: bold;
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
