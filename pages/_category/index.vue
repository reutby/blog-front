<template>
	<Category :category="metadata" :posts="posts"/>
</template>

<script>
  import Category from '~/.current_theme/Category'
  import useCategoryState from '../../compositions/category-state'

  export default {
    components: { Category },
    setup (_, { root: { $route } }) {
      return useCategoryState($route.params.category)
    }
  }
</script>
