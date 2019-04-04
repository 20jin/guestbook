import { FETCH_REPLIES } from '../actionTypes';
import { SET_REPLIES} from '../mutationTypes';
import RepliesService from '@/services/repliesService'

export const state = {
  replies: [],
};


export const actions = {
  /*
  [FETCH_ARTICLES]({ commit }) {
    return PostsService.get()
      .then(({ data }) => {
        commit(SET_ARTICLES, data.articles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  * */
  async [FETCH_REPLIES]({commit}) {
    try {
      let replies = await RepliesService.get();
      commit(SET_REPLIES, replies);
    } catch (e) {
      commit(SET_REPLIES, []);
    }

  },
};

export const mutations = {
  [SET_REPLIES](currentState, replies) {
    currentState.replies = replies;
  },
};

export default {
  state,
  actions,
  mutations,
}
