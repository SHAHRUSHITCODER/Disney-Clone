import React from 'react'
import styled from 'styled-components'
// import {auth,provider} from '../firebase';

function Header(props) {
  // const handleAuth = () => {
  //   auth.signInWithPopup(provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };
  const signout=()=>
  {
    window.location.href = '/login';

  }
    
  return (
    <Nav>
      <Logo src="/images/logo.svg" />      
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      
      <UserImg onClick={signout} src="/images/Shinchan.jpg" />
      
      
    </Nav>
  )
}

export default Header
const Nav= styled.nav`

   height: 70px;
   background:#090b13;
   display:flex;
   align-items:center;
   padding:0 36px;
   overflow-x:hidden;
 
`;
const Logo =styled.img`
width:80px;

`
const NavMenu = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
  

  img {
    height: 20px;
  }

  span {
    color: #FFFFFF;
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }
  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
}
  
  

 



`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`
// const Subscribe=styled.div`
// padding-right:25px;
// .subscribe
// {
//   width:100px;
//   height:27px;
//   color: #FFFFFF;
//   background-color:#1f80e0;
//   border-radius:6.5px;
//   cursor:pointer;
// }
// `
