import React, { useState, useEffect } from 'react';
import axios from 'axios';
// The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted.
import { useParams, useNavigate } from 'react-router-dom';

import './EditEntry.css';

// We are using matches props
export default function EditEntry(props) {
  const [entry, setEntry] = useState({
    title: '',
    date: '',
    content: '',
    id: '',
  });

  //   Navigate/History prop keeps track of all the session history
  const navigate = useNavigate();
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

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const editEntry = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        const { title, date, content, id } = entry;
        const newEntry = {
          title,
          date,
          content,
        };
        await axios.put(`/api/entries/${id}`, newEntry, {
          headers: { Authorization: token },
        });
        /* Push method is used to push a path in ***History Stack*** 
        Thereby redirecting to the last route added */
        return navigate.push('/');
      }
    } catch (error) {
      window.location.href = '/';
    }
  };

  return (
    <div className="edit_card">
      <h2>Edit Entry</h2>
      <form onSubmit={editEntry} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="editEntryInput"
            //Value if for initial value
            value={entry.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
          />
        </div>
        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            className="editEntryInput"
            //Value if for initial value
            value={entry.content}
            id="content"
            name="content"
            required
            rows="10"
            onChange={onChangeInput}
          />
        </div>
        <label htmlFor="content">Date: {entry.date}</label>
        <div className="row">
          <input
            className="editEntryInput"
            type="date"
            //Value if for initial value
            value={entry.date}
            id="date"
            name="date"
            onChange={onChangeInput}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
