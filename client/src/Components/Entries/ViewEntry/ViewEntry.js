import React, { useState, useEffect } from 'react';
import axios from 'axios';
// The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted.
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './ViewEntry.css';

// We are using matches props
export default function ViewEntry(props) {
  const [entry, setEntry] = useState({
    title: '',
    date: '',
    content: '',
    id: '',
  });

  const paramId = useParams().id;

  useEffect(() => {
    const getEntry = async () => {
      const token = localStorage.getItem('tokenStore');
      if (paramId) {
        const res = await axios.get(`/api/entries/${paramId}`, {
          headers: { Authorization: token },
        });
        setEntry({
          title: res.data.title,
          date: new Date(res.data.date).toLocaleDateString(),
          content: res.data.content,
          id: res.data._id,
        });
      }
    };
    getEntry();
  }, [paramId]);

  return (
    <div className="view_card">
      <div className="row">
        <h2>{entry.title}</h2>
      </div>

      <div className="row">
        <h2>{entry.date}</h2>
      </div>
      <div className="row">
        <p>{entry.content}</p>
      </div>

      <Link to="/">
        <button>Go Back</button>{' '}
      </Link>
    </div>
  );
}
