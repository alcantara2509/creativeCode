const isLogged = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.status === 200) return true;
  return false;
};

export default isLogged;
