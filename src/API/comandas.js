import axios from 'axios'
import {server} from './config'

export function getTables() {
  var request = axios.get(`${server}/comandas/active`)

  return request
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export function setTable(table) {
  var request = axios.post(`${server}/comandas/`, {
    mesa: table.mesa,
    mesero: table.mesero,
    zona: table.zona
  })

  return request
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}