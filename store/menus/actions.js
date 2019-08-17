import {MUTATIONS} from './consts';

export default  {
  nuxtServerInit({commit}) {
    return this.$axios.$get('api/menus/main')
      .then(menu => commit(MUTATIONS.SET_MAIN_MENU, menu));
  }
};
