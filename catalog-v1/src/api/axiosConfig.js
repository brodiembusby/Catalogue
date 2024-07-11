import axios from 'axios';

//TODO: Check that proxy is working correctly

const api = axios.create({
  baseURL: '/api/v1',
});

export default api;