/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';

const FormContainer = styled.div`
width: 80%;
text-align: center;
align-items: center;
justify-content: center;
margin: auto;
border: 1px solid green;
`
const FormForm = ()=> {
    return(
   <FormContainer>
    <Form></Form>
   </FormContainer>

    )
}

export default FormForm