<template>
	<Post :post="metadata"/>
</template>
<script>
	import {createNamespacedHelpers} from 'vuex';
	import {name, DATA} from '../../store/post/consts';
	import Post from '~/.current_theme/Post';

	const {mapState} = createNamespacedHelpers(name);

	export default {
		middleware: 'load-post',
		computed: mapState({metadata: DATA.METADATA}),
		components: {Post},
		metaInfo: {
			title: 'demo title',
			meta: [
				{ vmid: 'description', name: 'description', content: 'demo text' }
			]
		}
	}
</script>
