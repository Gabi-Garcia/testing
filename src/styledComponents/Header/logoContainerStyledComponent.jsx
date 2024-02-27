/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
width:80px;
height: 80px;
margin-top:0px;
border-radius: 100%;
/* border:1px solid black; */
`

const Logo = ({children}) => {
    return (
        <LogoContainer>{children}</LogoContainer>
    )
}

export default Logo;