import axios from 'axios'
import {server} from './config'

export function getProductsByNameLike(str) {
  var request = axios.post(`${server}/productos/by_name`, {
    name: str
  })
  
    return request
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export function getProductsById(id) {
  var request = axios.get(`${server}/productos/${id}`)
  
    return request
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}