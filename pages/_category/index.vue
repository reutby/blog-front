<template>
	<Category :category="metadata" :posts="posts"/>
</template>

<script>
	import {createNamespacedHelpers} from 'vuex';
	import {name, DATA} from '../../store/category/consts';
	import Category from '~/.current_theme/Category';

	const {mapState} = createNamespacedHelpers(name);

	export default {
		middleware: 'load-category',
		computed: mapState({
			metadata: DATA.METADATA,
			posts: DATA.POSTS,
		}),
		components: {Category}
	}
</script>
