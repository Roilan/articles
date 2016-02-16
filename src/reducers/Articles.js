import { GET_INITIAL_ARTICLES, GET_MORE_ARTICLES, LOAD_MORE_ARTICLES, SORT_BY_WORDS, SORT_BY_SUBMITTED } from '../actions/index';

const INITIAL_STATE = {
  allArticles: [],
  visibleArticles: [],
  sortedArticles: [],
  sortedBy: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INITIAL_ARTICLES:
      return Object.assign({}, state, {
        ...state,
        allArticles: action.payload.data,
        visibleArticles: action.payload.data.slice(0, 10)
      })

    case GET_MORE_ARTICLES:
      return Object.assign({}, state, {
        ...state,
        allArticles: [...state.allArticles, ...action.payload.data],
        visibleArticles: [...state.visibleArticles, ...action.payload.data.slice(0, 10)]
      });

    case LOAD_MORE_ARTICLES:
      let sortedArticles = [];
      let visibleArticles = []
      if (state.allArticles.length === state.visibleArticles.length) {
        return state;
      }

      visibleArticles = [
        ...state.visibleArticles,
        ...state.allArticles.slice(state.visibleArticles.length, state.visibleArticles.length + 10)
      ];

      if (state.visibleArticles.length >= state.sortedArticles.length) {
        if (state.sortedBy === SORT_BY_WORDS) {
          sortedArticles = [...visibleArticles].sort((a, b) => a.words - b.words);
        } else if (state.sortedBy === SORT_BY_SUBMITTED) {
          sortedArticles = [...visibleArticles].sort((a, b) => new Date(a.publish_at) - new Date(b.publish_at));
        }
      }

      return Object.assign({}, state, {
        ...state,
        visibleArticles,
        sortedArticles
      });

    case SORT_BY_WORDS:
      return Object.assign({}, state, {
        ...state,
        sortedArticles: [...state.visibleArticles].sort((a, b) => a.words - b.words),
        sortedBy: SORT_BY_WORDS
      });

    case SORT_BY_SUBMITTED:
      return Object.assign({}, state, {
        ...state,
        sortedArticles: [...state.visibleArticles.sort((a, b) => new Date(a.publish_at) - new Date(b.publish_at))],
        sortedBy: SORT_BY_SUBMITTED
      });
    default:
      return state;
  }
}