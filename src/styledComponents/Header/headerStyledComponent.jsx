/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import LogoContainer from './LogoContainerStyledComponent'

const HeaderContain = styled.header`
@media(min-width: 769px) and (max-width: 1500px){
 
  width: 30%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border:1px solid blue; */
h1{
    width:60%;
    font-size: 2.7rem;
    justify-content: center;
    /* margin: auto; */
    /* border: 1px solid violet; */
  }
  .logoImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    /* border: 1px solid red; */
  }
}
/*MOBILE*/
@media(min-width: 320px) and (max-width: 768px){

  width: 90%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  /* border: 1px solid blue; */
h1{
  width: 60%;
  justify-content: center;
  /* border: 1px solid violet; */
}
.logoImg{
  width: 70%;
  height: 70%;
  object-fit: cover;
  border-radius: 100%;
  /* border: 1px solid red; */
}
}
` 
const MainHeader = () => {
    return (
      <>
      <div className='header'>
        <HeaderContain>
          <LogoContainer></LogoContainer>
          <h1>TESTING?</h1> 
        </HeaderContain>
      </div>
        </> 
    )
}

export default MainHeader;