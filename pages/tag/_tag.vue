<template>
	<Tag :posts="posts" :tag="$route.params.tag"/>
</template>

<script>
  import Tag from '~/.current_theme/Tag'
  import useTagPosts from '../../compositions/tag-posts'

  export default {
    components: { Tag },
    setup () {
      return useTagPosts()
    },
  }
</script>
