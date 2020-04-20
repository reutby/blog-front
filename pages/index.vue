<template>
	<Index :posts="posts" :tags="tags"/>
</template>

<script>
  import Index from '~/.current_theme/Index'
  import useHomeState from '../compositions/home-state'

  export default {
    components: {
      Index,
    },
    setup () {
      return useHomeState()
    },
  }
</script>
