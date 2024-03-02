/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`

@media(min-width: 769px) and (max-width: 1500px){
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width:90vw;
  margin: auto;
  height: 18vh; 
  margin-top: 50px;
  /* border: 1px solid blue; */
  
  .footer > ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: auto;
    margin-top:0px;
    justify-content: space-around;
    padding: 0;
    /* border: 1px solid yellow; */
  }
  .footer > ul > li{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .footer > ul > li > a > .imgFooter{
    margin-top: 20px;
    width:20px;
    height:20px;
  }
  .footer > ul > li > a > .imgFooter > img{
    width:100%;
    height:100%;
    border-radius: 5px;
  }
  .footer > p{
    box-sizing: border-box;
    width: 20%;
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
    margin: auto;
    margin-top: 15px;
    justify-content: center;
    color: black;
    padding: 5px;
    /* border: 1px solid red; */
  }
}
 /*MOBILE*/
 @media(min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width:100%;
  height: 15vh; 
  margin-top: 30px;
  /* border: 1px solid red; */
      
      .footer  ul{
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: auto;
        margin-top: 15px;
        justify-content: space-around;
        padding: 0px;
        border-radius: 5px;
        /* border: 1px solid yellow; */
      }
      .footer  ul li{
        display: flex;
        flex-wrap: wrap;
      }
      .footer  ul li a .imgFooter{
        width:20px;
        height:20px;
      }
      .footer  ul li a .imgFooter img{
        width:100%;
        height:100%;
        border-radius: 5px;
      }
      .footer p{
        box-sizing: border-box;
        width: 80%;
        display: flex;
        /* padding:5px; */
        font-size: 0.8rem;
        font-weight: 700;
        margin: auto;
        margin-top: 10px;
        justify-content: center;
        color:black;
      }
    }
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