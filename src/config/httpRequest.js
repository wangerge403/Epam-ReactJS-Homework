import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 50000
})

// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

// request interceptor
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  res => {
    const data = res.data;
    const result = data.success;
    if (result) {
      console.log('res========', res);
      return res;
    } else {
      console.log('something error', res.message);
    }
  },
  error => {
    console.log('error==================' + error);
    return Promise.reject(error)
  }
)

// 封装get方法
export function get({ url, params }) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

// 封装post方法
export function post({ url, data }) {
  return new Promise((resolve, reject) => {
    http.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}