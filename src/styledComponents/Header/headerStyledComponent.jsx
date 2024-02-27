/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const HeaderContain = styled.header`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
width:50%;
margin-top:0px;
margin: auto;
/* border:1px solid yellow; */
`
const MainHeader = ({children}) => {
    return (
        <HeaderContain>{children}</HeaderContain>
    )
}

export default MainHeader;