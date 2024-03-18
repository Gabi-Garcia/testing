/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import FormContainer from '../Form/formStyledComponent';
import CajaLinks from '../../styledComponents/Links/linksStyledComponent';
import CajaGiphy from '../../styledComponents/Main/giphyContainerStyledComponent'

const MainContain = styled.main`
@media(min-width: 769px) and (max-width: 1500px){
 
width: 90%;
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-top: 20px;
/* border:1px solid green; */
p{
  font-size: 0.8rem;
  width: 90%;
  margin: auto;
  margin-top: 20px;
}
.cajaTextoGiphy{
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    /* border: 1px solid green; */
  }
  .giphyImg{
    margin: auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 100%;
  }
  .cajaTextoGiphy > p{
    font-size: 0.8rem;
    color: black;
    width: 60%;
  }
  .input{
    width: 10%;
  }
  .button{
    padding: 10px;
    border-radius: 7px;
  }
  .formulario{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30%;
    margin: auto;
    justify-content: space-around;
    /* border: 1px solid yellow; */
  }
  .formulario > input{
    text-align: center;
    width: 40%;
  }
}
/*MOBILE*/
@media(min-width: 320px) and (max-width: 768px){

    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px;
    /* border:1px solid green; */
    p{
  font-size: 0.7rem;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  /* color: green; */
}
.cajaTextoGiphy{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    /* border: 1px solid blue; */
  }
  .giphyImg{
    margin: auto;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-top: 10px;
    border-radius: 100%;
  }
  .cajaTextoGiphy > p{
    font-size: 0.7rem;
    color: black;
    width:100%;
    /* border: 1px solid red; */
  }
  .input{
    width: 10%;
  }
  .button{
    padding: 10px;
    border-radius: 7px;
  }
  .formulario{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
    justify-content: space-around;
    /* border: 1px solid red; */
  }
  .formulario > input{
    text-align: center;
    width: 60%;
  }
}
`
const MainMain = ()=>{
    return(
        <>
        <MainContain>
            <FormContainer></FormContainer>
            <CajaGiphy></CajaGiphy>
            <p>Existen diversos tipos de pruebas en el ámbito del desarrollo de software, cada uno enfocado en aspectos específicos del sistema.
                Aquí tienes un listado de algunas de las principales categorías de testing:
                Pruebas Unitarias (Unit Testing): Evaluación de unidades individuales de código para asegurar su correcto funcionamiento.
                Pruebas de Integración (Integration Testing): Verificación de la interacción entre diferentes componentes o módulos del sistema.
                Pruebas Funcionales (Functional Testing): Comprobación de que el software cumple con los requisitos funcionales especificados.
                Pruebas de Regresión (Regression Testing): Verificación de que las actualizaciones o modificaciones no afectan negativamente las funcionalidades existentes.
                Pruebas de Aceptación del Usuario (User Acceptance Testing - UAT): Validación de que el sistema satisface los requisitos del usuario final.
                Pruebas de Humo (Smoke Testing): Verificación inicial para identificar problemas graves antes de realizar pruebas más exhaustivas.
                Pruebas de Rendimiento (Performance Testing): Evaluación del rendimiento y la capacidad del sistema bajo diferentes condiciones.
                Pruebas de Carga (Load Testing): Evaluación del comportamiento del sistema bajo cargas significativas.
                Pruebas de Estrés (Stress Testing): Evaluación de cómo el sistema se comporta ante condiciones extremas o situaciones límite.
                Pruebas de Seguridad (Security Testing): Identificación de vulnerabilidades y evaluación de la seguridad del sistema.
                Pruebas de Penetración (Penetration Testing): Simulación de ataques para identificar posibles brechas de seguridad.
                Pruebas de Interoperabilidad (Interoperability Testing): Verificación de la compatibilidad entre diferentes sistemas o componentes.
                Pruebas de Usabilidad (Usability Testing): Evaluación de la facilidad de uso y la experiencia del usuario.
                Pruebas de Compatibilidad (Compatibility Testing): Verificación de que el software funciona correctamente en diferentes entornos y dispositivos.
                Pruebas de Back-End (Back-End Testing): Evaluación de la lógica y funcionalidad del servidor o back-end.
                Pruebas de Front-End (Front-End Testing): Evaluación de la interfaz de usuario y la experiencia del usuario en el lado del cliente.
                Es importante adaptar las pruebas según las necesidades específicas de cada proyecto y considerar la combinación de diversas estrategias para garantizar una cobertura completa del sistema.
            </p>
            <CajaLinks></CajaLinks>
        </MainContain>
        </>
    )
}
export default MainMain;