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
		<SharePost :post="post"/>
	</div>
</template>

<script>
  import PostBreadcrumbs from './components/PostBreadcrumbs'
  import SharePost from './components/SharePost'

  export default {
    props: {
      post: Object,
    },
    components: { SharePost, PostBreadcrumbs },
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
</style>
