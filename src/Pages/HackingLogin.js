import React, { useEffect, useRef } from 'react';
import './HackingLogin.css'
import { useNavigate } from 'react-router-dom';

const HackingLogin = () => {
     const canvasRef = useRef(null);
     const navigate = useNavigate();

     if ("vibrate" in navigator) {
          // Vibrate for 30 seconds (if supported, but duration may be limited)
          navigator.vibrate(30000);
        } else {
          console.log("Vibration not supported on this device.");
        }



     const handlesubmit = (e)=>{
          e.preventDefault();

          const form = e.target;
          const key = form.key.value;
          // console.log(key);

          {key === '#bc#3#8b2_4a+#4aa_#7d_8#3#0#1#c+5#c_4#e#425#f0##ca' ? navigate('/admins') : 
          navigator.vibrate([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]) && alert("Wrong Request You are in DANGER");
          }

          const token = '#bc#3#8b2_4a+#4aa_#7d_8#3#0#1#c+5#c_4#e#425#f0##ca';
          {key === '#bc#3#8b2_4a+#4aa_#7d_8#3#0#1#c+5#c_4#e#425#f0##ca' && localStorage.setItem("PHIS-ADMIN-TOKEN",token)}

     }



     useEffect(() => {
          const hacking = () => {
               const canvas = canvasRef.current;
               const context = canvas.getContext('2d');

               canvas.height = window.innerHeight;
               canvas.width = window.innerWidth;

               const letraTam = 12;
               const columnas = canvas.width / letraTam;

               let Texto = "0";
               Texto = Texto.split("");
               let Texto2 = "1";
               Texto2 = Texto2.split("");

               const letras = [];
               for (let i = 0; i < columnas; i++) {
                    letras[i] = 1;
               }

               const dibujar = () => {
                    context.fillStyle = "rgba(0,0,0,0.05)";
                    context.fillRect(0, 0, canvas.width, canvas.height);

                    context.fillStyle = "#0f0";
                    context.font = `${letraTam}px arial`;

                    for (let i = 0; i < letras.length; i++) {
                         let text = Texto;
                         let text2 = Texto2;

                         if (i % 2 === 1) {
                              context.fillText(text, i * letraTam, letras[i] * letraTam);
                         } else {
                              context.fillText(text2, i * letraTam, letras[i] * letraTam);
                         }

                         if (letras[i] * letraTam > canvas.height && Math.random() > 0.975) {
                              letras[i] = 0;
                         }
                         letras[i]++;
                    }
               };

               setInterval(dibujar, 120);
          };

          hacking();
     }, []);

     return <div>
          <canvas ref={canvasRef}></canvas>
          <div className='code'>
               <h1 className='hacker-title'>PHIS-ADMIN</h1>

               <div>
                    <form onSubmit={handlesubmit}>
                    <input className='hackinput' type="text" id="newPhoneNumber" name='key' placeholder="Enter Your HashKey" />
                    <button type='submit' >Enter</button>
                    </form>
               </div>

               <div id="phoneLocations"></div>
          </div>


     </div>;
};

export default HackingLogin;
