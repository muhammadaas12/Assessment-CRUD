import React, { useEffect, useState } from 'react'
import './Adduser.css'
import axios from 'axios'
import Formtable from './Components/Formtable';


axios.defaults.baseURL = 'https://spotless-erin-shirt.cyclic.cloud/';
export default function Adduser() {


  const [addSection, setAddSection] = useState(false)
  const [formdata, setformdata] = useState({

    name: "",
    email: "",
    password: "",
    mobilenumber: ""
  });


  const [formdataedit, setformdataedit] = useState({

    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    id: ""
  });



  const [editSection, seteditSection] = useState(false)
  const [datalist, setdatalist] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('/createuser', formdata);
    fetcheddata();
    if (data.data.success) {
      setAddSection(false)
      alert(data.data.message)
    }
  }
  const fetcheddata = async () => {
    const data = await axios.get('/')
    console.log(data)
    if (data.data.success) {
      setdatalist(data.data.data)
    }
  }
  useEffect(() => {
    fetcheddata()
  }, [])

  const handleupdate = async (e) => {
    e.preventDefault()
    const data = await axios.put('/updateuser', formdataedit)
    if (data.data.success) {
      fetcheddata()
      alert(data.data.message)
      seteditSection(false)
    }

  }

  const handleEditOnchange = async (e) => {

    const { value, name } = e.target
    setformdataedit((preve) => {
      return {
        ...preve, [name]: value
      }
    })

  }

  const handleDelete = async (id) => {
    const data = await axios.delete('/delete/' + id);
    alert("Data Deleted Successfully")
    if (data.data.success) {
      fetcheddata();
    }
  }
  const handlechange = (e) => {
    const { value, name } = e.target
    setformdata((preve) => {
      return {
        ...preve, [name]: value
      }
    })
  }
  const handleedit = (el) => {
    setformdataedit(el)
    seteditSection(true)
  }



  return (

    <div className='all'>
      <div className='btn btn-add' onClick={() => setAddSection(true)}>Add</div>
      {

        addSection && (
          <Formtable
            handleSubmit={handleSubmit}
            handlechange={handlechange}
            handleclose={() => setAddSection(false)}
            rest={formdata}
          />
        )

      }

      {

        editSection && (
          <Formtable
            handleSubmit={handleupdate}
            handlechange={handleEditOnchange}
            handleclose={() => seteditSection(false)}
            rest={formdataedit}
          />



        )




      }

      <div className='tablecontainer'>
        <table>
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>
                Update
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {datalist[0] ? (
              datalist.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.password}</td>
                    <td>{el.mobilenumber}</td>
                    <td><button className='btn btn-success' onClick={() => handleedit(el)} >Update</button></td>
                    <td><button className='btn btn-danger' onClick={() => { handleDelete(el._id) }}>Delete</button></td>
                  </tr>
                )

              })) : (
              <p style={{ textAlign: "center" }}>List is empty</p>
            )
            }

          </tbody>
        </table>

      </div>
    </div>

  )
}

