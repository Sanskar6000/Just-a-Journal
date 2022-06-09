import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import './Info.css';

export default function Info() {
  return (
    <div className="info_card">
      <div className="info_title">
        <h1 className="info_title_heading">
          <div className="info_title_heading_div">JUST</div>
          <div className="info_title_heading_div">A</div>
          <div className="info_title_heading_div">JOURNAL</div>
        </h1>
        <p className="info_title_p">
          Your private, secure & <br />
          beautiful online journal
        </p>
      </div>
      <h1 className="info_title_heading_socials">socials</h1>

      <ul className="info_socials">
        <li className="info_socialsli">
          <a className="info_socialsa" href="mailto: sanskaryerawar@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li className="info_socialsli">
          <a className="info_socialsa" href="https://github.com/Sanskar6000">
            <FaGithub />
          </a>
        </li>
        <li className="info_socialsli">
          <a
            className="info_socialsa"
            href="https://www.linkedin.com/in/sanskar-yerawar-056307205/"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="info_socialsli">
          <a className="info_socialsa" href="https://twitter.com/Sanskar6000">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <h3 className="info_madeby">Made by Sanskar Yerawar</h3>
    </div>
  );
}
