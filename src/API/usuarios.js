import axios from 'axios'

const server = 'http://localhost:8000'

export function addUser(user) {
  var request = axios.post(`${server}/usuarios`, {
    nombre: user.nombre,
    usuario: user.usuario,
    password: user.password,
    puesto: user.puesto,
    status: user.status,
    dias: user.dias
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
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}
