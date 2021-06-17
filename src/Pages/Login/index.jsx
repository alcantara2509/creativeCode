/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../../Service/login';
import { logoColorida } from '../../Styles/Assets';
import './style.css';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const fetchLogin = async (e) => {
    e.preventDefault();
    const req = await login(email, password);
    if (req.responseStatus === 200) {
      localStorage.setItem('user', JSON.stringify({ email, status: req.responseStatus }));
      history.push('/');
    }
    setError(req.responseMessage);
  };

  return (
    <section className="login-container">
      <form action="" className="login-form-container">
        <img src={logoColorida} alt="creative code logo" className="login-logo" />
        <label className="login-label">
          usuário
          <input
            required
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            className="login-input"
          />
        </label>
        <label className="login-label">
          senha
          <input
            required
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            className="login-input"
          />
        </label>
        {
        error ? <p>{error}</p> : null
      }
        <section className="login-button">
          <button
            type="submit"
            onClick={fetchLogin}
            className="user-card-button"
          >
            Entrar
          </button>
        </section>
      </form>
    </section>
  );
}

export default Login;
