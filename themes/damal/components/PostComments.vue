<template>
	<div class="comments-list">
		<div v-if="isMounted"
		     class="fb-comments"
		     :data-href="href"
		     data-width="100%" data-numposts="5"></div>
	</div>
</template>
<script>
  export default {
    name: 'PostComments',
    props: {
      post: Object,
    },
    data () {
      return { isMounted: false }
    },
    computed: {
      href () {
        return location.href
      }
    },
    async mounted () {
      this.isMounted = true
      await this.$nextTick()
      if (window.FB) {
        window.FB.XFBML.parse()
      }
    },
    head () {
      return {
        script: [{
          vmid: 'facebook',
          src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=1126115047726666',
          crossorigin: 'anonymous',
          async: true, defer: true
        }]
      }
    }
  }
</script>
<style scoped>
	.comments-list {
		margin-top: 30px;
		min-height: 179px;
	}
</style>
