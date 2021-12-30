import axios from "./interceptor";

const http = {
  get: async (url, data = {}) => axios.get(url, { params: data }),
  post: async (url, data = {}) => axios.post(url, data),
};

export default http;
