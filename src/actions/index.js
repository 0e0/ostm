import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'https://api.mlab.com/api/1/databases/spreadthemusic/collections';
const API_KEY = 'apiKey=XlWgxPp6lHH9oG1DkOgWdxTLWAe_6HSr';

export function fetchFeb4() {
  const request = axios.get(`${ROOT_URL}/performer?q={'date': {$eq: 'Feb4'}}&${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function fetchFeb11() {
  const request = axios.get(`${ROOT_URL}/performer?q={'date': {$eq: 'Feb11'}}&${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchMar4() {
  const request = axios.get(`${ROOT_URL}/performer?q={'date': {$eq: 'Mar4'}}&${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchMar11() {
  const request = axios.get(`${ROOT_URL}/performer?q={'date': {$eq: 'Mar11'}}&${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/performer?q={'date': {$eq: 'Feb4'}}&${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//febuary 4
export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/performer?${API_KEY}`, props);

  return {
    type: CREATE_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/performer/${id}?${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  };
}


export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/performer/${id}?${API_KEY}`)

  return {
    type: DELETE_POST,
    payload: request
  };
}
