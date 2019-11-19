<template>
	<div>
		<PostsBoxes :posts="posts"/>
	</div>
</template>
<script>
  import PostsBoxes from './components/PostsBoxes'

  export default {
    props: {
      posts: Array,
    },
    components: { PostsBoxes }
  }
</script>

<style>

</style>
