
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const CajaLinks = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 90%;
text-decoration: none;
border: 1px solid red;
cursor: pointer;
`
const ListadoDeLinks = ()=> {
    return (
        <>
            <p>Finalmente te dejamos un listado de lugares dónde comenzar tu búsqueda de información.</p>
    <CajaLinks>
        <div className='cajaLinks'>
             <ul>
                <li>
                <a href="https://jmeter.apache.org/" target="_blank" rel="noreferrer"> Apache JMeter</a>
                </li>
                <li>
                <a href="https://developer.mozilla.org/es/" target="_blank" rel="noreferrer"> MDN Web Docs o JUnit.</a>
                </li>
                <li>
                <a href="https://qatestlab.com/" target="_blank" rel="noreferrer"> Software Testing Help </a>
                </li>
                <li>
                <a href="https://userlytics.com/" target="_blank" rel="noreferrer">Userlytics </a>
                </li>
                <li>
                <a href="https://owasp.org/" target="_blank" rel="noreferrer">  OWASP</a>
                </li>
                <li>
                <a href="https://smartbear.com/" target="_blank" rel="noreferrer">  SmartBear</a>
                </li>
            </ul>
        </div>    
    </CajaLinks>
    </>
    )
}

export default ListadoDeLinks;