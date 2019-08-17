<template>
  <article>
    <h1>{{metadata.title}}</h1>
    <section class="short">
      {{metadata.short}}
    </section>
    <section>{{metadata.content}}</section>
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
  .short {
    font-weight: bold;
  }
</style>
