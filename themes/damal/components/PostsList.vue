<template>
	<div>
		<section v-for="post in posts" :key="post._id">
			<h3>
				<nuxt-link :to="{params: {post: post.path, category: post.category}, name: 'category-post'}">{{post.title}}</nuxt-link>
			</h3>
			<small class="created">{{post.created | dateTime}}</small>
			<div class="short" v-html="post.short"></div>
		</section>
	</div>
</template>

<script>
	export default {
		props: {
			posts: Array,
		},
	}
</script>

<style scoped>
	section {
		padding: 10px 0;
		margin: 10px;
		border-top: 1px solid #ccc;
		border-radius: 5px;
	}

	h3 {
	}

	.created {
		color: #03414c;
		display: block;
		font-size: 70%;
		font-style: italic;
	}

	.short {
		padding-top: 10px;
	}
</style>
