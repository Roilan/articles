import { GET_INITIAL_ARTICLES, GET_MORE_ARTICLES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case GET_INITIAL_ARTICLES:
      return [...state, ...action.payload.data]
    default:
      return state;
  }
}