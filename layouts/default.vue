<template>
  <Layout/>
</template>
<script>
  import Layout from '~/.current_theme/Layout';

  export default {
    components: {
      Layout
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    }
  }
</script>

