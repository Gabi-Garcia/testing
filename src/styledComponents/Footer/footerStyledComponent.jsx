/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
width:100%;
text-align: center;
/* border: 1px solid black; */
`
const footerFooter = ()=> {
    return(
        <FooterContainer>
             <div className='footer'>
              
              <ul>
                <li>
                  <a href="https://github.com/Gabi-Garcia"  target="_blank" rel="noreferrer" >
                    <div className="imgFooter">
                      <img src="/github.png" alt="Github-img" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gabriel-garcia-ab029b210/" target="_blank" rel="noreferrer" >
                    <div className="imgFooter">
                      <img src="/linkedin.png" alt="Linkedin-img" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:gabriel.garcia.development@gmail.com">
                    <div className="imgFooter">
                      <img src="/email.png" alt="email-img" />
                    </div>
                  </a>
                </li>      
              </ul>
                  <p>Creado por Gabi-Garcia</p>             
      </div>
        </FooterContainer>  
    )
}

export default footerFooter