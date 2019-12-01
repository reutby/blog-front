<template>
	<div>
		<TopPostsGroup :posts="topPosts"/>
		<TagsBox :tags="tags"/>
		<PostsList :posts="otherPosts"/>
	</div>
</template>
<script>
  import TopPostsGroup from './components/TopPostsGroup'
  import PostsList from './components/PostsList'
  import TagsBox from './components/TagsBox'

  export default {
    props: {
      posts: Array,
      tags: Array
    },
    components: { TagsBox, PostsList, TopPostsGroup },
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
