import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Entry.css';

export default function Entry() {
  const [entries, setEntries] = useState([]);
  const [token, setToken] = useState('');

  const getEntries = async (token) => {
    const res = await axios.get('/api/entries', {
      headers: { Authorization: token },
    });
    setEntries(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem('tokenStore');
    setToken(token);
    if (token) {
      getEntries(token);
    }
  }, []);

  const deleteEntry = async (id) => {
    console.log(id);
    try {
      if (token) {
        await axios.delete(`/api/entries/${id}`, {
          headers: { Authorization: token },
        });
        getEntries(token);
      }
    } catch (error) {
      window.location.href = '/';
    }
  };

  function dateFormat(date) {
    const date1 = date.substring(0, 4);
    const date2 = date.substring(5, 7);
    const date3 = date.substring(8, 10);

    return `${date3}/${date2}/${date1}`;
  }

  return (
    <div>
      <ul className="cards">
        {entries.map((entry) => (
          <li key={entry.id}>
            <div>
              <h4>{entry.title}</h4>
              <p>{dateFormat(entry.date.slice(0, 10))}</p>
              <p>
                {entry.content.slice(0, 195)} . . .
                <Link to={`view/${entry._id}`} className="ReadMore">
                  {' '}
                  Read more
                </Link>
              </p>

              <Link
                to={`edit/${entry._id}`}
                className="card_icon_link card_icon_edit"
              >
                <i class="bi bi-pencil-square card_icon"></i>
              </Link>
              <span
                onClick={() => deleteEntry(entry._id)}
                className="card_icon_link card_icon_delete"
              >
                <i class="bi bi-trash3-fill card_icon"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
