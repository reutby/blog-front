<template>
	<div class="app">
		<header>
			<Logo/>
			<MainMenu/>
		</header>
		<nuxt/>
		<Footer/>
	</div>
</template>
<script>
  import Logo from './components/Logo'
  import MainMenu from './components/MainMenu'
  import Footer from './components/Footer'

  export default {
    components: {
      Logo,
      MainMenu,
      Footer
    },
    head: {
      titleTemplate: '%s | greenpress - powerful blog platform'
    }
  }
</script>
<style lang="scss">
	@import "colors";
	@import url('https://fonts.googleapis.com/css?family=Assistant&display=swap');

	html {
		font-family: 'Assistant', sans-serif;
		font-size: 16px;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: $mainColor;
	}

	a:hover {
		text-decoration: underline;
	}

	header {
		display: flex;
		flex-direction: column;
	}

	@media all and (min-width: 500px) {
		.app {
			margin: 0 auto;
			width: 90%;
		}
	}

	.row {
		display: flex;

		> * {
			flex: 1;
		}
	}
</style>
