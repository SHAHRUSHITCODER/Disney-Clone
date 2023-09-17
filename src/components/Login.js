import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../firebase';


function Login(props) {
  const handleAuth = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        window.location.href = '/';

      })
      .catch((error) => {
        alert(error.message);
      });
    }
  return (
    <BackGround>
      <CTA>
        <img src="/images/cta-logo-one.svg" alt="" />
      </CTA> 
      <GetButton>
        <button className='button' onClick={handleAuth}>GET ALL THERE</button>
      </GetButton>  
      <Description >
      Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 24/02/22, the price of Disney and The Disney Bundle will increase by $1.
      </Description>  
      <CTA2>
        <img src="/images/cta-logo-two.png" alt="" />
      </CTA2>
    </BackGround>
  )
}

export default Login
const BackGround=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x:hidden;


&:before {
  background: url("/images/login-background.jpg") center / cover no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

`;
const CTA=styled.div`
       display:flex;
       align-items:center;
       justify-content:center;
       padding-top:200px;
    img
    {       
      width:45%;
      height:45%;
    }
`;
const GetButton=styled.div`
       display:flex;
       align-items:center;
       justify-content:center;
       .button
       {        
         width:45%; 
         padding-top:13px;
         padding-bottom:13px;
         border-radius:5px ;
         border:none;
         background-color:#075ee6;
         color:white;
         letter-spacing:1.4px;
         font-weight:700; 
         cursor:pointer; 
         transition:all 250ms;      
       }
       .button:hover{
        transform:scale(1.015);
        background-color:rgb(30,120,248);
       }
       
`;
const Description=styled.div`       
       display:flex;
       align-items:center;
       justify-content:center;
       color:white;
       width:45%;
       font-size:0.97vh;
       margin:auto;  
       padding-top:8.5px; 
       padding-left:4.5px;   
`;
const CTA2=styled.div`
       display:flex;
       align-items:center;
       justify-content:center;       
       padding-top:13px;
    img
    {       
      width:45%;
      height:45%;
    }      
    img
    {       
      width:45%;
      height:45%;
    }
`;



