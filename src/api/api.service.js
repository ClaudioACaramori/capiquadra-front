import axios from './axios.config';

const ApiService = {
  get: async (path, params) => {
    const { data } = await axios.get(path, { params });

    return data;
  },
  post: async (path, params) => {
    const { data } = await axios.post(path, params);

    return data;
  },
  put: async (path, params) => {
    const { data } = await axios.put(path, params);

    return data;
  },
  delete: async (path, params) => {
    const { data } = await axios.delete(path, { params });

    return data;
  },
};

export default ApiService;
