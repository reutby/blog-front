import { computed, onServerPrefetch, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/home/consts'

export default function useHomeState () {
  const { $store } = getCurrentInstance()

  const promise = $store.dispatch(name + '/' + ACTIONS.INIT)
  onServerPrefetch(() => promise)
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
    tags: computed(() => $store.state[name][DATA.TAGS]),
  }
}
