import {ACTIONS, name as postStore} from '../store/post/consts';

export default function loadPost({store, route}) {
  return store.dispatch(postStore + '/' + ACTIONS.INIT, route.params);
}
