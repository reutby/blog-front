<template>
  <div>
    <header>
      <Logo/>
      <MainMenu/>
    </header>
    <nuxt/>
  </div>
</template>
<script>
  import Logo from '~/components/Logo';
  import MainMenu from '~/components/MainMenu';

  export default {
    components: {
      Logo,
      MainMenu
    }
  }
</script>
<style>
  html {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
