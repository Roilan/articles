import axios from 'axios';

export const GET_INITIAL_ARTICLES = 'GET_INITIAL_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';

export function getArticles() {
  const request = axios.get('https://mic-articles.firebaseio.com/.json')
  return {
    type: GET_INITIAL_ARTICLES,
    payload: request
  }
}