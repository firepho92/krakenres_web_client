import axios from 'axios'
import {server} from './config'

export function getZones(user) {
  var request = axios.get(`${server}/zonas`)

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
