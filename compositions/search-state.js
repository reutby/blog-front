import { onServerPrefetch, ref, watchEffect, getCurrentInstance } from '@vue/composition-api'

export default function useSearch (query) {
  const { $axios } = getCurrentInstance()
  const posts = ref(null)

  function getPosts () {
    return $axios.$get(`api/posts`, { params: { q: query.value } }).then(list => {
      posts.value = list
    })
  }

  watchEffect(getPosts)
  onServerPrefetch(getPosts)

  return {
    posts
  }
}
