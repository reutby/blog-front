import {name as menuStore} from './menus/consts';

export const actions = {
  nuxtServerInit({dispatch}) {
    return dispatch(menuStore + '/nuxtServerInit');
  }
};
