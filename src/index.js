import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import AddUser from './Adduser';
import SignUpform from './SignUpform';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Routes>

        <Route exact path="/" element={<SignUpform />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/login" element={<Login />} />

      </Routes>
    </div>
  </Router>
);
reportWebVitals();
