<template>
	<div>
		<TopPostsGroup :posts="topPosts"/>
		<PostsList :posts="otherPosts"/>
	</div>
</template>
<script>
  import TopPostsGroup from './components/TopPostsGroup'
  import PostsList from '../default/components/PostsList'

  export default {
    props: {
      posts: Array,
    },
    components: { PostsList, TopPostsGroup },
    computed: {
      topPosts () {
        return this.posts ? this.posts.filter((post, index) => index < 5) : []
      },
      otherPosts () {
        const [a, b, c, d, e, ...otherPosts] = this.posts || []
        return otherPosts
      }
    }
  }
</script>

<style>

</style>
