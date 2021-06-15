import axios from 'axios';

const baseURL = 'https://api.github.com';

const gitUsers = async () => {
  const request = await axios.get(`${baseURL}/users`);

  return request;
};

export default gitUsers;
