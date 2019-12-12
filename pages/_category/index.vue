<template>
	<Category :category="metadata" :posts="posts"/>
</template>

<script>
  import Category from '~/.current_theme/Category'
  import getCategoryState from '../../compositions/category-state'

  export default {
    components: { Category },
    setup (_, { root: { $route, $store } }) {
      return getCategoryState($store, $route.params.category)
    }
  }
</script>
