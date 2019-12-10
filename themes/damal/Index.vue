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
  import { computed } from '@vue/composition-api'

  export default {
    props: {
      posts: Array,
      tags: Array
    },
    components: { TagsBox, PostsList, TopPostsGroup },
    setup (props) {
      const topPosts = computed(() => {
        return props.posts ? props.posts.filter((post, index) => index < 5) : []
      })
      const otherPosts = computed(() => {
        const [a, b, c, d, e, ...otherPosts] = props.posts || []
        return otherPosts
      })
      return {
        topPosts,
        otherPosts
      }
    }
  }
</script>

<style>

</style>
