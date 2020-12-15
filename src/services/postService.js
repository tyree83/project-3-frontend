const BASE_URL = 'https://p3-backend.herokuapp.com/api/posts';


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