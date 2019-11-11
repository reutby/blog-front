import {MUTATIONS, ACTIONS} from './consts';

export default {
  [ACTIONS.INIT]({dispatch}) {
    return Promise.all([
      dispatch(ACTIONS.LOAD_POSTS),
    ]);
  },
  [ACTIONS.LOAD_POSTS]({commit}) {
    return this.$axios.$get(`api/posts?isPublic=true`)
        .then(list => commit(MUTATIONS.SET_POSTS, list));
  },
};
