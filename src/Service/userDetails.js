import axios from 'axios';

const baseURL = 'https://api.github.com/users';

const getUser = async (userLogin) => {
  const request = await axios.get(`${baseURL}/${userLogin}`);

  return request;
};

export default getUser;
