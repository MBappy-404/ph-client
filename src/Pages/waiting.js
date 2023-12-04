import React from 'react';
import '../App.css'

const waiting = () => {
     return (
          <div>
          <div className='wait' >
               <img src="https://i.gifer.com/1LBN.gif" alt="" />
              
          </div>
          <h5 style={{textAlign: 'center', marginTop: '50px'}}>Something went wrong - try letter! </h5>
          </div>
     );
};

export default waiting;