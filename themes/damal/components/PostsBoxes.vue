<template>
	<div>
		<PostsGroup v-for="(group, index) in groupedPosts" :posts="group" :key="index"/>
	</div>
</template>
<script>
  import PostsGroup from './PostsGroup'

  export default {
    components: { PostsGroup },
    props: {
      posts: Array,
    },
    computed: {
      // array of arrays of posts, each group contains up to 5 posts.
      groupedPosts () {
        if (!this.posts) return []

        return this.posts.reduce((result, post) => {
          const lastGroup = result[result.length - 1]
          if (lastGroup.length < 5) {
            lastGroup.push(post)
          } else {
            result.push([post])
          }
          return result
        }, [[]])
      }
    }
  }
</script>
<style scoped>

</style>
