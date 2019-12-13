<template>
	<Tag :posts="posts" :tag="$route.params.tag"/>
</template>

<script>
  import Tag from '~/.current_theme/Tag'
  import getTagPosts from '../../compositions/tag-posts'

  export default {
    components: { Tag },
    setup (_, { root: { $route, $store } }) {
      return getTagPosts($store, $route.params.tag)
    },
  }
</script>
