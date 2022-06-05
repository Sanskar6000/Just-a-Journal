import axios from 'axios';
import React, { useState } from 'react';
import App from './../../App';

import './Login.css';

export default function Login({ setisLogin }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr('');
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/register', {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: '', email: '', password: '' });
      setErr(res.data.msg);
    } catch (error) {
      error.response.data.msg && setErr(error.response.data.msg);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', {
        email: user.email,
        password: user.password,
      });
      setUser({ name: '', email: '', password: '' });
      localStorage.setItem('tokenStore', res.data.token);
      setisLogin(true);
    } catch (error) {
      error.response.data.msg && setErr(error.response.data.msg);
    }
  };

  const [onLogin, setOnLogin] = useState(false);
  const style = {
    visibility: onLogin ? 'visible' : 'hidden',
    opacity: onLogin ? 1 : 0,
  };

  return (
    <div>
      <div className="Login">
        <h2 className="Login_heading">Login yoyoyo</h2>
        <form className="Login_form" onSubmit={loginSubmit}>
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <span
              onClick={() => {
                setOnLogin(true);
              }}
            >
              {' '}
              Register Now
            </span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
      <div className="Register" style={style}>
        <h2 className="Register_heading">Register</h2>
        <form className="Register_form" onSubmit={registerSubmit}>
          <input
            type="text"
            name="name"
            id="register-name"
            placeholder="User Name"
            required
            value={user.name}
            onChange={onChangeInput}
          />
          <input
            type="email"
            name="email"
            id="register-email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />
          <button type="submit">Register</button>
          <p>
            Already have an account?
            <span
              onClick={() => {
                setOnLogin(false);
              }}
            >
              {' '}
              Login Now
            </span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
    </div>
  );
}
