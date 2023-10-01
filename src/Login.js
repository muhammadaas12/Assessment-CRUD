import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://spotless-erin-shirt.cyclic.cloud/';

export default function Login() {
  const [formdataaa, setformdataaa] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('/user/login', formdataaa);
    navigate('/adduser');
    alert('You are logged in');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdataaa((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={formdataaa.email}
                onChange={handleInputChange}
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={formdataaa.password}
                onChange={handleInputChange}
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
