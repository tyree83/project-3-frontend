import { getToken } from './tokenService';

const BASE_URL = 'http://localhost:3001/api/posts';


export function fetchPostData() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function addPostData(post) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      },
      body: JSON.stringify(post)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}