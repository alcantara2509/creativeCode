const express = require('express');
const cors = require('cors');
const { login } = require('./seeders/login');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Creative Code'));
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(401).json({ message: 'Preencha os campos corretamente.' });
  if (email !== login.email || password !== login.password) {
    return res.status(401).json({ message: 'Login ou senha inválidos' });
  }
  return res.status(200).json({ message: 'ok' });
});

app.listen(port, () => `Running on ${port}`);
