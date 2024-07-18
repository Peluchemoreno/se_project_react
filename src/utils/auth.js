const baseUrl = 'http://localhost:4000/';

function checkServerResponse(res){
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject((err) => {
      console.error(err);
    });
  }
}

export function register(email, password, name, avatar){
  return fetch(baseUrl + 'signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password, name, avatar})
  })
  .then(checkServerResponse)
  .then(() => {
    // immediately sign the user in
    signin(email, password)
  })
  .catch(err => {
    console.error(err)
  })
}

export function signin(email, password){
  return fetch(baseUrl + 'signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  .then(checkServerResponse)
  .then(data => {
    localStorage.setItem('jwt', data.token)
    return data
  })
  .catch(err => {
    console.error(err)
  })
}

export function getUser(token){
  return fetch(baseUrl + 'users/me', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
  .then(checkServerResponse)
  .then(user => {
    return user
  })
}


