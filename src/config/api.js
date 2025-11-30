const apiConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT || '10000', 10),
  endpoints: {
    chat: '/chat',
  },
};

export default apiConfig;
