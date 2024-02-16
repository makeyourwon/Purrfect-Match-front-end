import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/`


function getUser() {
  return tokenService.getUserFromToken()
}

async function signup(user) {
  try {
    const res = await fetch(`${BASE_URL}register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
      return json.token
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

async function login(credentials) {
  try {
    const res = await fetch(`${BASE_URL}login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const json = await res.json() 
    if (json.access) {
      tokenService.setToken(json.access)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

function logout() {
  tokenService.removeToken()
}

export { signup, getUser, logout, login }

