import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Header.css';

export default function Header({ setisLogin }) {
  const logoutSubmit = () => {
    localStorage.clear();
    setisLogin(false);
  };

  // Header Effect
  useEffect(() => {
    const navbarLinksList = document.querySelectorAll('.navbar .navbar-link');
    const navbarUnderscore = document.querySelector(
      '.navbar .navbar-underscore'
    );
    const activeNavLinkClassName = 'active';

    navbarLinksList.forEach((navLink) => {
      if (navLink.classList.contains(activeNavLinkClassName)) {
        showNavbarUnderscore(navLink);
      }

      navLink.addEventListener('click', function () {
        for (let navLink of navbarLinksList) {
          if (navLink.classList.contains(activeNavLinkClassName)) {
            navLink.classList.remove(activeNavLinkClassName);
            break;
          }
        }

        this.classList.add(activeNavLinkClassName);
        showNavbarUnderscore(this);
      });
    });

    function showNavbarUnderscore(navLink) {
      navbarUnderscore.style.width = `${navLink.offsetWidth}px`;
      navbarUnderscore.style.transform = `translateX(${navLink.offsetLeft}px)`;

      if (navbarUnderscore.style.display !== 'block') {
        navbarUnderscore.style.display = 'block';
      }
    }
  }, []);

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link active">
            <i className="bi bi-house navbar-link-icon"></i>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="navbar-link">
            <i className="bi bi-pencil navbar-link-icon"></i>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/info" className="navbar-link">
            <i className="bi bi-info navbar-link-icon"></i>
          </Link>
        </li>

        <li className="navbar-item" onClick={logoutSubmit}>
          <Link to="/" className="navbar-link">
            <i className="bi bi-box-arrow-right navbar-link-icon"></i>
          </Link>
        </li>

        <div className="navbar-underscore"></div>
      </ul>
    </div>
  );
}
