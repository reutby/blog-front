<template>
	<div class="post">
		<PostBreadcrumbs :post="post"/>
		<article>
			<h1>{{post.title}}</h1>
			<p>
				<small>{{authors}} | {{post.created | dateTime}}</small>
			</p>
			<section class="post-content" v-html="post.content"></section>
		</article>
		<div class="tags-container" v-if="post.tags.length"><div>Related tags:&nbsp;</div><Tags :tags="post.tags"/></div>
		<SharePost :post="post"/>
	</div>
</template>

<script>
  import PostBreadcrumbs from './components/PostBreadcrumbs'
  import SharePost from './components/SharePost'
  import Tags from './components/Tags'

  export default {
    props: {
      post: Object,
    },
    components: { Tags, SharePost, PostBreadcrumbs },
    computed: {
      authors () {
        return this.post.authors ? this.post.authors.map(a => a.name).join(', ') : ''
      }
    },
    head () {
      return {
        title: this.post.title + ' - ' + this.post.category.name,
        meta: [
          { vmid: 'description', name: 'description', content: this.post.title }
        ]
      }
    }
  }
</script>

<style scoped>
	.post {
		padding: 10px;
	}

	.post-content {
		padding: 10px 0;
	}

	.tags-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}
</style>
