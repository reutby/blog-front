<template>
	<Index :posts="posts"/>
</template>

<script>
	import {createNamespacedHelpers} from 'vuex';
	import {name, DATA} from '../store/home/consts';

	const {mapState} = createNamespacedHelpers(name);

	import Index from '~/.current_theme/Index';

	export default {
		middleware: 'load-home-posts',
		components: {
			Index,
		},
		computed: mapState({posts: DATA.POSTS})
	}
</script>