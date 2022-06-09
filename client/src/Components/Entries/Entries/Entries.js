import React from 'react';
import Header from '../Header/Header.js';
import Entry from '../Entry/Entry.js';
import CreateEntry from '../CreateEntry/CreateEntry';
import EditEntry from '../EditEntry/EditEntry';
import ViewEntry from '../ViewEntry/ViewEntry';
import Info from '../Info/Info.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './Entries.css';

export default function Entries({ setisLogin }) {
  return (
    <Router>
      <div className="Entries">
        <Header setisLogin={setisLogin} />
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/create" element={<CreateEntry />} />
          <Route path="/edit/:id" element={<EditEntry />} />
          <Route path="/view/:id" element={<ViewEntry />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>

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
    </Router>
  );
}
