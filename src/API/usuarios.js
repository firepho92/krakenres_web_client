import axios from 'axios'
import {server} from './config'

export function getUser(user) {
  var request = axios.get(`${server}/usuarios/${user}`)

  return request
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export function addUser(user) {
  var request = axios.post(`${server}/usuarios`, {
    nombre: user.nombre,
    usuario: user.usuario,
    password: user.password,
    status: user.status
  })

  return request
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export function login(user, password) {
  var request = axios.post(`${server}/usuarios/login`, {
    usuario: user,
    password: password,
  })

  return request
  .then(res => {
    console.log(res.data)
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export function logout(user) {
  var request = axios.post(`${server}/usuarios/logout`, {
    usuario: user
  })

  return request
  .then(res => {
    //console.log(res.data)
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export function isLogged() {
  var request = axios.get(`${server}/usuarios/isLogged`)

  return request
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}