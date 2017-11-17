// import Vue from 'vue'
import axios from 'axios'
// import Qs from 'qs'
// const baseUrl = 'http://api.douban.com/v2/'
// Vue.prototype.HOST = '/api'
// Vue.prototype.$http = axios


// const instance = axios.create({
//   baseURL: 'http://api.douban.com/v2/',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   transformRequest: [function (data) {
//     data = Qs.stringify(data)
//     return data
//   }],
//   withCredentials: true
// })

export const GET_IN_THEATERS = ({
  dispatch,
  state,
  commit
}) => {
  //   Vue.$http(baseUrl + '/movie/in_theaters').then(res => {
  //     commit('in_theaters', res.data)
  //   }, res => {
  //     console.error('error')
  //   })   
  axios({
    url: '/v2/movie/in_theaters'
  }).then(res => {
    commit('in_theaters', res.data)
  })
}
export const GET_TOP250 = ({
  dispatch,
  state,
  commit
}) => {
  //   Vue.$http(baseUrl + '/movie/top250').then(res => {
  //     commit('TOP250', res.data)
  //   }, res => {
  //     console.error('error')
  //   })
  axios({
    url: '/v2/movie/top250'
  }).then(res => {
    commit('TOP250', res.data)
  })
}
