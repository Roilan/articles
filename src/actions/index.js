import axios from 'axios';

export const GET_INITIAL_ARTICLES = 'GET_INITIAL_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';
export const LOAD_MORE_ARTICLES = 'LOAD_MORE_ARTICLES';

const ROOT_URL = 'https://mic-articles2.firebaseio.com';
const INITIAL_ARTICLES = `${ROOT_URL}/initial.json`;
const MORE_ARTICLES = `${ROOT_URL}/more.json`;

export function getArticles() {
  const request = axios.get(INITIAL_ARTICLES);
  return {
    type: GET_INITIAL_ARTICLES,
    payload: request
  }
}

export function loadMoreArticles() {
  return {
    type: LOAD_MORE_ARTICLES
  }
}