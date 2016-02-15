import { GET_INITIAL_ARTICLES, GET_MORE_ARTICLES, LOAD_MORE_ARTICLES } from '../actions/index';

const INITIAL_STATE = {
  allArticles: [],
  visibleArticles: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INITIAL_ARTICLES:
      return {
        allArticles: action.payload.data,
        visibleArticles: action.payload.data.slice(0, 10)
      }
    case LOAD_MORE_ARTICLES:
      if (state.allArticles.length === state.visibleArticles.length) {
        return state;
      }

      return Object.assign({}, state, {
        visibleArticles: [
          ...state.visibleArticles,
          ...state.allArticles.slice(state.visibleArticles.length, state.visibleArticles.length + 10)
        ]
      })
    default:
      return state;
  }
}