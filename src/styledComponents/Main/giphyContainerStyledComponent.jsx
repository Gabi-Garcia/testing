/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components';

const CajaGiphy = styled.div`
flex-direction: column;
flex-wrap: wrap;
width:90%;
margin-top:0px;
margin: auto;
/* border:2px solid black; */
` 
const Giphy = () => {
    return(
        <CajaGiphy>
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
        </CajaGiphy>
    )
}
export default Giphy;