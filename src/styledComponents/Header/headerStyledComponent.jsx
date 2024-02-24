/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const HeaderContain = styled.header`
width:100%;
height:15vh;
margin-top:10px;
border:1px solid yellow;
`
const MainHeader = ({children}) => {
    return (
        <HeaderContain>{children}</HeaderContain>
    )
}

export default MainHeader;