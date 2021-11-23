import React from 'react'
import './loading.css'

export default function Loading() {
	return (
		<div className="container-loading">
			/* You can remove these code below*/
  :root {
    --primary: #08aeea;
    --secondary: #13D2B8;
    --purple: #bd93f9;
    --pink: #ff6bcb;
    --blue: #8be9fd;
    --gray: #333;
    --font: "Poppins", sans-serif;
    --gradient: linear-gradient(40deg, #ff6ec4, #7873f5);
    --shadow: 0 0 15px 0 rgba(0,0,0,0.05);
  }*{box-sizing:border-box;}input,button,textarea{border:0;outline:none;}
  /* Main code */
  
          .double-loading {
            width: 100px;
            height: 100px;
            position: relative;
          }
          .double-loading .c1 {
            width: 100%;
            height: 100%;
            border: 5px solid #6a5af9;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-radius: 100rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: c1 1s infinite linear;
          }
          .double-loading .c2 {
            width: 50%;
            height: 50%;
            border: 5px solid #6a5af9;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
            border-radius: 100rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: c2 1s infinite linear;
          }
          @keyframes c1 {
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          @keyframes c2 {
            to {
              transform: translate(-50%, -50%) rotate(-360deg);
            }
          }
		</div>
	)
}
