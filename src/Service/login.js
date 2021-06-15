import axios from 'axios';

const baseURL = 'http://localhost:3001/login';

const login = async (email, password) => {
  const request = await axios.post(baseURL, { email, password })
    .then((response) => ({
      responseMessage: response.data.message,
      responseStatus: response.status,
    })).catch(({ response }) => ({
      responseMessage: response.data.message,
      responseStatus: response.status,
    }));

  return request;
};

export default login;
