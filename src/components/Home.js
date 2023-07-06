import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider'; // Update the import path
import Viewers from '../components/Viewers';
import Movies from'../components/Movies';
import db from '../firebase';
// import { collection, getDocs } from "firebase/firestore";
function Home() {
  async function  Rushit()
  {
    
    db.collection("movies").onSnapshot((snapshot)=>
    {
      console.log(snapshot.docs);
    })
  }
  useEffect(()=>
  
  {
    Rushit();
  
    
  },[])
           
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />

    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;

  &:before {
    background: url("/images/home-background.png") center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
