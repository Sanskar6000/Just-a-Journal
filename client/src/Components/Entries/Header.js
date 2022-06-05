import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setisLogin }) {
  const logoutSubmit = () => {
    localStorage.clear();
    setisLogin(false);
  };

  return (
    <header>
      <div className="Header-Logo">
        <h1>
          <Link to="/">My Diary</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Entry</Link>
        </li>
        <li onClick={logoutSubmit}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </header>
  );
}
