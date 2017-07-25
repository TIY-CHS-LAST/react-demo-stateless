import fetch from 'isomorphic-fetch'

import { API_URL } from '../config'

export function getAllBitters() {
  return fetch(`${API_URL}`)
  .then(response => response.json())
  .catch(err => console.log(err))
}
export function deleteBitter (id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  .catch(err => console.log(err))
}

export function createBitter (bitter) {
  return fetch(`${API_URL}`, {
    method: 'POST',
    body: JSON.stringify(bitter)
  })
  .catch(err => console.log(err))
}

export function updateBitter (updatedBitter) {
  return fetch(`${API_URL}/${updatedBitter._id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedBitter)
  })
  .catch(err => console.log(err))
}
