<template>
	<div>
		index page

		<p>this is default theme</p>
		<p>This text should be stored in the blog's config.</p>
		<PostsList :posts="posts"/>
	</div>
</template>
<script>
	import PostsList from './components/PostsList';

	export default {
		props: {
			posts: Array,
		},
		components: {PostsList}
	}
</script>

<style>

</style>
