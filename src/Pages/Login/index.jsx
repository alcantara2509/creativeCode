import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../../Service/login';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchLogin = async (e) => {
    e.preventDefault();
    const req = await login(email, password);
    if (req.responseStatus === 200) {
      localStorage.setItem('user', JSON.stringify({ email, status: req.responseStatus }));
      history.push('/');
    }
  };

  return (
    <form action="">
      <input required type="email" onChange={({ target }) => setEmail(target.value)} />
      <input required type="password" onChange={({ target }) => setPassword(target.value)} />
      <button
        type="submit"
        onClick={fetchLogin}
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
