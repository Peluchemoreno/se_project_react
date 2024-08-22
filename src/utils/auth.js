import { BASE_URL } from './constants'
import {processServerResponse} from '../utils/weatherApi'

export function register(email, password, name, avatar){
  return fetch(BASE_URL + 'signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password, name, avatar})
  })
  .then(processServerResponse)
  .then(() => {
    // immediately sign the user in
    signin(email, password)
  })
}

export function signin(email, password){
  return fetch(BASE_URL + 'signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  .then(processServerResponse)
  .then(data => {
    localStorage.setItem('jwt', data.token)
    return data
  })
}

export function getUser(token){
  return fetch(BASE_URL + 'users/me', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
  .then(processServerResponse)
  .then(user => {
    return user
  })
}


