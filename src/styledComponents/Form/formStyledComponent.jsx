/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';

const FormContainer = styled.div`
@media(min-width: 769px) and (max-width: 1500px){
width: 80%;
text-align: center;
align-items: center;
justify-content: center;
margin: auto;
padding: 5px;
/* border: 1px solid green; */
p{
    width: 100%;
    font-size: 0.8rem;
}
.button{
    cursor: pointer;
}
.formulario{
    width: 35%;
    /* border: 1px solid yellow; */
}
.formulario .input{
    width: 200px;
    /* border: 1px solid red; */
}
}
@media(min-width: 320px) and (max-width: 768px){
width: 90%;
text-align: center;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 10px;
padding: 5px;

p{
    width: 100%;
    font-size: 0.7rem;
    /* border: 1px solid black; */
}
}
`
const FormForm = ()=> {
    return(
   <FormContainer>
    <Form></Form>
   </FormContainer>
    )
}

export default FormForm