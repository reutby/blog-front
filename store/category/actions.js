import {MUTATIONS, ACTIONS} from './consts';

export default {
  [ACTIONS.INIT]({dispatch}, category) {
    return Promise.all([
      dispatch(ACTIONS.LOAD_POSTS, category),
      dispatch(ACTIONS.LOAD_CATEGORY, category)
    ]);
  },
  [ACTIONS.LOAD_POSTS]({commit}, category) {
    return this.$axios.$get(`api/categories/${category}/posts?isPublic=true`)
      .then(list => commit(MUTATIONS.SET_POSTS, list));
  },
  [ACTIONS.LOAD_CATEGORY]({commit}, category) {
    return this.$axios.$get(`api/categories/${category}`)
      .then(metadata => commit(MUTATIONS.SET_METADATA, metadata));
  }
};
