<template>
  <div>
    <h1>{{metadata.name}}</h1>

    <section v-for="post in posts">
      {{post.title}}
      <nuxt-link :to="{params: {post: post.path}, name: 'category-post'}">link</nuxt-link>
    </section>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex';
  import {name, DATA} from '../../store/category/consts'

  const {mapState} = createNamespacedHelpers(name);

  export default {
    middleware: 'load-category',
    computed: mapState({
      metadata: DATA.METADATA,
      posts: DATA.POSTS,
    }),
  }
</script>

<style>

</style>
