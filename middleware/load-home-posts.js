import {ACTIONS, name as homeStore} from '../store/home/consts';

export default function loadCategory({store}) {
  return store.dispatch(homeStore + '/' + ACTIONS.INIT);
}
