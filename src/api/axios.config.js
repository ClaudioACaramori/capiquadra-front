import axios from 'axios';

const baseConfig = {
  baseURL: `http://localhost:3000/api`,
  timeout: 60 * 1000,
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use((config) => {
  const newConfig = config;

  return newConfig;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
  },
);

export default axiosInstance;
