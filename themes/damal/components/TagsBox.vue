<template>
	<div class="tags">
		<span
				v-for="tag in alphabetTags" :key="tag.tag"
				:style="{fontSize: (tag.count / bigger * 400) + '%'}">
			<nuxt-link :to="{params: {tag: tag._id}, name: 'tag-tag'}">{{tag._id}}</nuxt-link>&nbsp;
		</span>
	</div>
</template>
<script>
  export default {
    props: {
      tags: Array,
    },
    computed: {
      bigger () {
        const biggest = this.tags[0]
        return biggest && biggest.count
      },
      alphabetTags () {
        return [].concat(this.tags).sort((a, b) => a._id > b._id ? 1 : -1)
      }
    }
  }
</script>
<style scoped lang="scss">
	@import "../colors";

	.tags {
		background-color: $mainColorOpacity;
		margin: 10px 0;
		font-size: 14px;
		text-align: center;

		span {
			vertical-align: middle;
		}

		a {
			text-decoration: none;
			transition: color 0.2s linear;
			color: rgba(0, 0, 0, 0.7);

			&:hover {
				color: black;
			}
		}
	}
</style>
