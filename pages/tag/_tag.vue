<template>
	<Tag :posts="posts" :tag="$route.params.tag"/>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import { name, DATA } from '../../store/tag/consts'
  import Tag from '~/.current_theme/Tag'

  const { mapState } = createNamespacedHelpers(name)

  export default {
    components: { Tag },
    middleware: 'load-tag-posts',
    computed: mapState({ posts: DATA.POSTS }),
  }
</script>
