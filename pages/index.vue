<template>
	<Index :posts="posts" :tags="tags"/>
</template>

<script>
  import Index from '~/.current_theme/Index'
  import getHomeState from '../compositions/home-state'

  export default {
    components: {
      Index,
    },
    setup (_, { root: { $store } }) {
      return getHomeState($store)
    },
  }
</script>
