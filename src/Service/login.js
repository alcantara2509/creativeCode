import axios from 'axios';

const baseURL = 'http://localhost:3001/login';

const login = async (email, password) => {
  const request = await axios.post(baseURL, { email, password });
  const responseMessage = request.data.message;
  const responseStatus = request.status;
  return { responseMessage, responseStatus };
};

export default login;
