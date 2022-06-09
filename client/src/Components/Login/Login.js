import axios from 'axios';
import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    // Form Javascript
    const loginText = document.querySelector('.title-text .login');
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    signupBtn.onclick = () => {
      loginForm.style.marginLeft = '-50%';
      loginText.style.marginLeft = '-50%';
    };
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = '0%';
      loginText.style.marginLeft = '0%';
    };
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  });

  return (
    <div>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Login</div>
          <div className="title signup">Signup</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" defaultChecked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" className="slide login">
              Login
            </label>
            <label for="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>

          {/* Form Inner */}
          <div className="form-inner">
            <form onSubmit={loginSubmit} className="login">
              <div className="field">
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Email Address"
                  required
                  value={user.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="field">
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
              </div>
              {/* <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div> */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Don't have an account? <a>Signup now</a>
              </div>
              <div className="login_error">{err}</div>
            </form>

            {/* Signup Inner */}
            <form onSubmit={registerSubmit} className="signup">
              <div className="field">
                <input
                  type="text"
                  name="name"
                  id="register-name"
                  placeholder="User Name"
                  required
                  value={user.name}
                  onChange={onChangeInput}
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  id="register-email"
                  placeholder="Email Address"
                  required
                  value={user.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="field">
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
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="login_error">{err}</div>
            </form>
          </div>
        </div>
      </div>

      {/* Background */}
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
