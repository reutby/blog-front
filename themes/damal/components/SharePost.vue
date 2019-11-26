<template>
	<div class="share" v-if="isMounted">
		<a :href="fbLink" target="_blank" class="fb">
			<i class="socicon-facebook"></i>
		</a>
		<a :href="linkedinLink" target="_blank" class="linkedin">
			<i class="socicon-linkedin"></i>
		</a>
		<a :href="twitterLink" target="_blank" class="twitter">
			<i class="socicon-twitter"></i>
		</a>
	</div>
</template>
<script>
  export default {
    name: 'SharePost',
    props: {
      post: Object,
    },
    data () {
      return { isMounted: false }
    },
    mounted () {
      this.isMounted = true
    },
    computed: {
      href () {
        return location.href
      },
      fbLink () {
        return 'https://www.facebook.com/share.php?u=' + this.href
      },
      linkedinLink () {
        return 'https://www.linkedin.com/cws/share?url=' + this.href
      },
      twitterLink() {
        return `https://twitter.com/intent/tweet?text=${this.post.title}&url=${this.href}`
      }
    },
    head () {
      return {
        link: [
          { rel: 'stylesheet', href: 'https://s3.amazonaws.com/icomoon.io/114779/Socicon/style.css?u8vidh' }
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
	@import "../colors";

	.share {
		display: flex;
		max-width: 500px;
		margin: 0 auto;

		> a {
			flex: 1;
			padding: 10px;
			text-align: center;
			text-decoration: none;
			transition: opacity 0.2s ease-in-out;
			color: #fff;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.fb {
		background-color: #3e5b98;
	}

	.linkedin {
		background-color: #3371b7;
	}
	.twitter {
		background-color: #4da7de;
	}

</style>
