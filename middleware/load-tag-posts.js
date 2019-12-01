import { ACTIONS, name as tagStore } from '../store/tag/consts'

export default function loadTagPosts ({ store, route }) {
  return store.dispatch(tagStore + '/' + ACTIONS.LOAD_POSTS, route.params.tag)
}
