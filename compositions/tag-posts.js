import { computed, onServerPrefetch } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/tag/consts'

export default function getTagPosts ($store, tag) {
  const promise = $store.dispatch(name + '/' + ACTIONS.LOAD_POSTS, tag)
  onServerPrefetch(() => promise)
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
  }
}
