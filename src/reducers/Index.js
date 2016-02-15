import { combineReducers } from 'redux';
import articlesReducer from './Articles';

const rootReducer = combineReducers({
  data: articlesReducer
})

export default rootReducer;
