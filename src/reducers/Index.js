import { combineReducers } from 'redux';
import articlesReducer from './Articles';

const rootReducer = combineReducers({
  articles: articlesReducer
})

export default rootReducer;
