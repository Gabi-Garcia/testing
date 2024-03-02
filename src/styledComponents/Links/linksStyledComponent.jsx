
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const CajaLinks = styled.nav`
@media(min-width: 769px) and (max-width: 1500px){

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  /* border: 1px solid brown;
   */
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */
  }
  li {
    margin-bottom: 0px; /* Ajusta según tus necesidades */
  }
  a {
    width: 150px;
    height: 50px;
    cursor: pointer;
    padding: 5px;
    /* border: 1px solid red; */
  }
}
@media(min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  /* border: 1px solid brown; */
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    padding: 10px;
    justify-content: space-between;
    /* border: 1px solid black; */
  }
  li {
    width: 50%;
    text-align: center;
    /* border: 1px solid yellow; */
  }
  a {
    width: 100px;
    height: 20px;
    cursor: pointer;
    font-size: 0.7rem;
    padding: 5px;
    /* border: 1px solid red; */
  }
}
`;

const ListadoDeLinks = () => {
  return (
    <>
      <p>Finalmente te dejamos un listado de lugares donde comenzar tu búsqueda de información.</p>
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
              <a href="https://owasp.org/" target="_blank" rel="noreferrer"> OWASP</a>
            </li>
            <li>
              <a href="https://smartbear.com/" target="_blank" rel="noreferrer"> SmartBear</a>
            </li>
          </ul>
        </div>
      </CajaLinks>
    </>
  );
};

export default ListadoDeLinks;
