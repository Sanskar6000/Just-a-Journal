import React from 'react';
import Header from './Header';
import Entry from './Entry';
import CreateEntry from './CreateEntry';
import EditEntry from './EditEntry';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Entries({ setisLogin }) {
  return (
    <Router>
      <div className="Entries">
        <Header setisLogin={setisLogin} />
        <div>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/create" element={<CreateEntry />} />
            <Route path="/edit/:id" element={<EditEntry />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
