import { onServerPrefetch, ref, watch } from '@vue/composition-api'

export default function useSearch ($axios, query) {
  const posts = ref(null)

  function getPosts () {
    return $axios.$get(`api/posts`, { params: { q: query.value } }).then(list => {
      posts.value = list
    })
  }

  watch(getPosts)
  onServerPrefetch(getPosts)

  return {
    posts
  }
}
