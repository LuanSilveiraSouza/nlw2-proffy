import axios from 'axios';

const api = axios.create({
  baseURL: 'http://exp://rd-8v4.anonymous.mobile.exp.direct:3333'
})

export default api;