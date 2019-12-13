import { computed, onServerPrefetch } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/home/consts'

export default function getHomeState ($store) {
  const promise = $store.dispatch(name + '/' + ACTIONS.INIT)
  onServerPrefetch(() => promise)
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
    tags: computed(() => $store.state[name][DATA.TAGS]),
  }
}
