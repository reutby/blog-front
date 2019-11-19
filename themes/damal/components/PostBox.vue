<template>
	<section @click="navigate">
		<img v-if="post.thumbnail" :src="post.thumbnail" :alt="post.title"/>
		<div class="content">
			<Tags :tags="post.tags"/>
			<h3>
				<nuxt-link :to="{params: {post: post.path, category: post.category}, name: 'category-post'}">
					{{post.title}}
				</nuxt-link>
			</h3>
			<small class="created">{{post.created | dateTime}}</small>
		</div>
	</section>
</template>

<script>
  import Tags from './Tags'

  export default {
    components: { Tags },
    props: {
      post: Object,
    },
    methods: {
      navigate (e) {
        if (e.target.tagName.toLowerCase() !== 'a') {
          this.$router.push({ params: { post: this.post.path, category: this.post.category }, name: 'category-post' })
        }
      }
    }
  }
</script>
<style scoped lang="scss">
	@import "../colors";

	$box-size: 200px;

	section {
		position: relative;
		height: $box-size;
		overflow: hidden;
		margin: 3px;
		background-color: $mainColorOpacity;
		cursor: pointer;

		&:hover {
			.content {
				margin-top: $box-size / 2.5;
				height: $box-size / 1.65;
			}
		}
	}

	img {
		max-width: 150%;
		max-height: 150%;
		position: absolute;
	}

	.content {
		margin-top: $box-size / 2;
		padding: 10px;
		height: $box-size / 2;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease-in-out;

		h3 {
			/deep/ a {
				color: #fff;
			}
		}

		.created {
			color: #ddd;
		}
	}
</style>
