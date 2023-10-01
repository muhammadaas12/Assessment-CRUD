import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import '../Adduser'

const Formtable = ({ handleSubmit, handlechange, handleclose, rest }) => {
  return (
    <div className="container" style={{ width: '45rem' }}>

      <div><h2>Add Your Details</h2></div>
      <div className='btn close-btn' onClick={handleclose}> <AiFillCloseCircle /></div>
      <form onSubmit={handleSubmit} >


        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handlechange}
            name="name"
            value={rest.name}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handlechange}
            name="email"
            value={rest.email}


          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlechange}
            name="password"
            value={rest.password}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mobile Number
          </label>
          <input
            type="Number"
            className="form-control"
            id="number"
            onChange={handlechange}
            name="mobilenumber"
            value={rest.mobilenumber}

          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Formtable
