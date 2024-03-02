/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
width:45px;
height:45px;
/* margin: auto; */
/* border:1px solid black; */

.logoImg{
    width: 100%;
    height: 100%;
}
`
const Logo = () => {
    return (
        <LogoContainer><img  className="logoImg" src="/programacion.png" alt="Logo Img" /></LogoContainer>
    )
}

export default Logo;