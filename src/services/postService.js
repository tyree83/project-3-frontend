const BASE_URL = 'http://localhost:3001/api/posts';


export function fetchPostData(){
  return fetch(BASE_URL).then(res => res.json());
}

export function addPostData(posts) {
    return fetch(BASE_URL,{
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(posts)  
    }).then(res => res.json());
}