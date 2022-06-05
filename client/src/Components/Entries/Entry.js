import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';

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

  return (
    <div className="Entry">
      {entries.map((entry) => (
        <div className="Entry_card" key={entry._id}>
          <h4 className="Entry_card_title">{entry.title}</h4>
          <p className="Entry_card_date">{format(entry.date)}</p>
          <div className="Entry_card_content">
            <p>{entry.content}</p>
          </div>

          <div className="Entry_card_footer">
            User Name
            <Link to={`edit/${entry._id}`}>Edit</Link>
          </div>
          <button
            className="Entry_card_button"
            onClick={() => deleteEntry(entry._id)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}
