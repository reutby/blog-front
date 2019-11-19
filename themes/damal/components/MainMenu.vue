<template>
	<div class="menu">
		<menuLink v-for="(item, index) of links" :link="item" :key="index" class="link"/>
	</div>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  import { name, GETTERS } from '../../../store/menus/consts'
  import MenuLink from '../../../components/MenuLink'

  const { mapGetters } = createNamespacedHelpers(name)

  export default {
    components: { MenuLink },
    computed: mapGetters({ links: GETTERS.MAIN_MENU_LINKS }),
  }
</script>
<style scoped lang="scss">
	@import "../colors";

	.menu {
		flex-wrap: nowrap;
		display: flex;
		background-color: #000;
	}

	.link /deep/ a {
		color: #fff;
		line-height: 46px;
		display: block;
		padding: 0 10px;
		transition: background-color 0.2s linear;


		&:hover, &.nuxt-link-active {
			background-color: $mainColor;
			text-decoration: none;
		}
	}


</style>
