import React, { useState } from 'react';
import axios from 'axios';
// The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted.
import { useNavigate } from 'react-router-dom';

export default function CreateEntry() {
  const [entry, setEntry] = useState({
    title: '',
    date: '',
    content: '',
  });

  //   Navigate/History prop keeps track of all the session history
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const createEntry = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        const { title, date, content } = entry;
        const newEntry = {
          title,
          date,
          content,
        };
        await axios.post('/api/entries', newEntry, {
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
    <div className="createEntry">
      <h2>Create Entry</h2>
      <form onSubmit={createEntry}>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
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
