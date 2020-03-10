<template>
	<Search :query="query" :posts="posts"/>
</template>

<script>
  import Search from '~/.current_theme/Search'
  import useSearch from '../../compositions/search-state'
  import { ref, watch } from '@vue/composition-api'

  export default {
    components: { Search },
    setup (_, { root: { $axios }, parent: { $route } }) {
      const query = ref($route.query ? $route.query.q : null)

      watch('$route.query.q', (q) => query.value = q)

      return {
        ...useSearch($axios, query),
        query,
      }
    }
  }
</script>
