<template>
	<div class="menu-wrapper">
		<div class="menu">
			<nuxt-link v-for="(item, index) of menu" :to="item.route" :key="index">{{item.name}}
			</nuxt-link>
		</div>
	</div>
</template>
<script>
	import {createNamespacedHelpers} from 'vuex';
	import {name, GETTERS} from '../../../store/menus/consts';

	const {mapGetters} = createNamespacedHelpers(name);

	export default {
		computed: {
			...mapGetters({menu: GETTERS.MAIN_MENU_LINKS})
		},
	}
</script>
<style scoped>
	.menu-wrapper {
		display: block;
		overflow: auto;

	}
	.menu {
		flex-wrap: nowrap;
		display: flex;
	}

	a {
		padding: 5px 10px;
		height: 35px;
		white-space: nowrap;
	}

	a.nuxt-link-active, a:hover {
		border-bottom: 1px solid #03414c;
		text-decoration: none;
	}

</style>
