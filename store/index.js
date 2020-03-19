export const state = () => ({
  posts: [],
  pagination: {}
});

export const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload;
  },
  SET_PAGINATION (state, payload){
    state.pagination = payload;
  }
};

export const actions = {
  loadPosts({commit}, page=1){
    this.$axios.$get('http://127.0.0.1:8000/api/posts', {
      params:{
        page: page
      }
    }).then(resp => {
      commit('SET_POSTS', resp.data);
      delete(resp.data);
      commit('SET_PAGINATION', resp);
    });
  }
};

export const getters = {

};
