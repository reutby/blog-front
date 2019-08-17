<template>
  <ul>
    <nuxt-link to="/">HOME</nuxt-link>
    <nuxt-link v-for="(item, index) of menu" :to="item.route" :key="index">{{item.name}}</nuxt-link>
  </ul>
</template>
<script>
  import {createNamespacedHelpers} from 'vuex';
  import {name, GETTERS} from '../store/menus/consts';

  const {mapGetters} = createNamespacedHelpers(name);

  export default {
    computed: {
      ...mapGetters({menu: GETTERS.MAIN_MENU_LINKS})
    },
  }
</script>
