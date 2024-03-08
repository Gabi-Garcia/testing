/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderContain from '../styledComponents/Header/HeaderStyledComponent';
import LogoContainer from '../styledComponents/Header/LogoContainerStyledComponent';



const Header = () => {
  return (
    <>
    <h2 data-testid='title'>Prueba</h2>
    <HeaderContain >
     <LogoContainer>
     </LogoContainer>
    </HeaderContain>
    </>
  )
}

export default Header