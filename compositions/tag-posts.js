import { computed, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/tag/consts'

export function fetchTagPosts ($store, $route) {
  return $store.dispatch(name + '/' + ACTIONS.LOAD_POSTS, $route.params.tag)
}

export function useTagPosts () {
  const { $store } = getCurrentInstance()
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
  }
}
