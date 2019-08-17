import {name as menuStore} from './menus/consts';
import {name as categoryStore, ACTIONS} from './category/consts';

export const actions = {
  nuxtServerInit({dispatch}) {
    return dispatch(menuStore + '/nuxtServerInit');
  }
};
