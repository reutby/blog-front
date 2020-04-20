import { computed, onServerPrefetch, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/tag/consts'

export default function useTagPosts () {
  const { $store, $route } = getCurrentInstance()
  const promise = $store.dispatch(name + '/' + ACTIONS.LOAD_POSTS, $route.params.tag)
  onServerPrefetch(() => promise)
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
  }
}
