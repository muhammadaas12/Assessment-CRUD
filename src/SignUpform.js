import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signupform.css';

axios.defaults.baseURL = 'https://spotless-erin-shirt.cyclic.cloud/';

export default function SignUpform() {
  const [formdataa, setformdataa] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('/user/signup', formdataa);
    console.log(data)
    navigate('/login');
    alert('Your Data Is Saved Successfully');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdataa((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={handleInputChange}
                name="email"
                value={formdataa.email}
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={handleInputChange}
                name="password"
                value={formdataa.password}
                className="form-control"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            <Link
              className="btn btn-danger mt-4"
              to="/login"
              style={{ marginLeft: "20rem", padding: '7px' }}
            >
              Already A User?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
