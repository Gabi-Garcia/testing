/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/header.css';
import HeaderContain from '../styledComponents/Header/headerStyledComponent';
import LogoContainer from '../styledComponents/Header/logoContainerStyledComponent';


const Header = () => {
  return (
    <>
    <div className='header'>
    <HeaderContain>
     <LogoContainer>
     <img  className="logoImg" src="/programacion.png" alt="Logo Img" />
     </LogoContainer>
     <h1>Testing Project</h1> 
    </HeaderContain>
    </div>
    </>
  )
}

export default Header