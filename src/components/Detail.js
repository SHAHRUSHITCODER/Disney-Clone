import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/bao.jpg"  />
      </Background>
      <ImageTitle>
        <img src=""  />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png"  />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png"  />
            <span>TRAILER</span>
        </TrailerButton>
        <PlusButton>
         <span>+</span>
        </PlusButton>
        <GroupWatchButton>
        <img src="/images/group-icon.png"  />        
      </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
      A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever      </Description>
    </Container>
  )
}

export default Detail
 const Container=styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw+5px);
    position:relative;
 `;
 const Background=styled.div`
 position:fixed;
 top:0;
 bottom:0;
 left:0;
 right:0;
 z-index:-1;
 opacity:0.8;
 img
 {
  width:100%;
  height:100%;
  object-fit:cover;
 }
 `;
 const ImageTitle=styled.div`
  height:30vh;
  min-height:170px;
  width:35vw;
  min-width:200px;
  padding-left:15px;
  margin-top:60px;

  img
  {
    width:100%;
    height:100%
    object-fit:contain;
  } `;
  const Controls=styled.div`
      display:flex;
      align-items:center;
      padding-left:15px;

  `;
  const PlayButton=styled.button`
      border-radius:4px;
      border:none;
      display:flex;
      align-items:center;
      padding:0 24px;
      margin-right:22px;
      background:rgb(249,249,249);
      letter-spacing:1.8px;
      height:56px;
      cursor:pointer;
      
      &:hover{
        background:rgb(198,198,198);
      }
  
  `;
  const TrailerButton=styled(PlayButton)`
  background:rgba(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:white;
   
  `;
  const PlusButton=styled.button`
  margin-right:16px;
  width:44px;
  height:44px;
  dispaly:flex;
  border-radius:50%;
  background:rgba(0 ,0, 0 ,0.3);
  border:2px solid rgba(249,249,249,0.8);
  align-items:center;
  justify-content:center;
  cursor:pointer;
  span
  {
    font-size:30px;
    color:white;
  }
  &:hover{
    background:rgb(150,150,150);
  }
  
  `;
  const GroupWatchButton=styled(PlusButton)`
  background:rgb(0,0,0);
  
 
  `;
  const SubTitle=styled.div`
  padding:24px 0;
  color:white; 
  padding-left:15px;

  `;
  const Description=styled.div`
  color:white;
  width:50%;
  padding-left:15px;
  font-size:16px;
  `;




