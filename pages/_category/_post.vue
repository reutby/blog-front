<template>
  <article>
    <h1>{{metadata.title}}</h1>
    <section class="post-short" v-html="metadata.short"></section>
    <section class="post-content" v-html="metadata.content"></section>
  </article>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex';
  import {name, DATA} from '../../store/post/consts';

  const {mapState} = createNamespacedHelpers(name);

  export default {
    middleware: 'load-post',
    computed: mapState({metadata: DATA.METADATA})
  }
</script>

<style scoped>
  .post-short {
    font-weight: bold;
  }
  .post-content {
    padding: 20px;
  }
</style>
