<template>
	<header>
		<Logo/>
		<MainMenu/>
	</header>
</template>
<script>
  import Logo from './Logo'
  import MainMenu from './MainMenu'

  export default {
    components: {
      Logo,
      MainMenu,
    }
  }
</script>
<style scoped lang="scss">
	header {
		display: flex;
		flex-direction: column;
	}

	@media all and (max-width: 720px) {
		header {
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
