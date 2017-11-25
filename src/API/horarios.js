import axios from 'axios'
import {server} from './config'

export function getWaiters(day) {
    var request = axios.post(`${server}/horarios/by_day`, {
      dia: day
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