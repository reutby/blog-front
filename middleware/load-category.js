import {ACTIONS, name as categoryStore} from '../store/category/consts';

export default function loadCategory({store, route}) {
  return store.dispatch(categoryStore + '/' + ACTIONS.INIT, route.params.category)
}
