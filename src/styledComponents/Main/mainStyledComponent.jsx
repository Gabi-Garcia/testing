/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import FormContainer from '../Form/formStyledComponent';
import CajaLinks from '../../styledComponents/Links/linksStyledComponent';

const MainContain = styled.main`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width:90%;
margin-top:0px;
margin: auto;
border:2px solid violet;
`
const MainMain = ()=>{
    return(
        <>
        <MainContain>
            <FormContainer></FormContainer>
            <cajaGiphy>                 
                <div className='cajaTextoGiphy'>
                    <p>El testing en programación se refiere al proceso de verificar y validar que un
                         software o una aplicación funcione como se espera. Consiste en diseñar casos
                          de prueba, ejecutarlos y comparar los resultados obtenidos con los resultados
                           esperados. El objetivo principal del testing es identificar y corregir posibles 
                           errores o defectos en el código, asegurando así la calidad y confiabilidad del
                            software. Los diferentes tipos de pruebas, como pruebas unitarias, de integración 
                            y de aceptación, se utilizan en conjunto para garantizar un desarrollo robusto y
                             la entrega de productos de software sin problemas. El testing es una práctica 
                             crucial para mejorar la estabilidad, el rendimiento y la experiencia del usuario
                              en cualquier aplicación.
                              El objetivo principal es identificar y corregir posibles errores antes de que el
                               software sea implementado en un entorno de producción. El testing abarca diferentes
                                niveles, desde pruebas unitarias que examinan componentes individuales hasta pruebas
                                 de sistema que evalúan la funcionalidad completa de la aplicación. Este enfoque sistemático 
                                 ayuda a mejorar la calidad del software, aumentar la confianza en su rendimiento y facilitar
                                  el mantenimiento a lo largo del tiempo.                   
                    </p>
                    <img className='giphyImg'  src="https://media.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=790b761192q4t8zcoy3uoqxy8sgbjn25ypjkn7o66zy43qd6&ep=v1_gifs_trending&rid=giphy.gif&ct=g" alt="giphyImg" />
                </div>
            </cajaGiphy>
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