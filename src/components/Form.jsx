/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Form = () => {
  // Estado para almacenar el nombre del usuario
  const [userName, setUserName] = useState('');
  // Estado para controlar si se ha enviado el formulario
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('')
  // Función para manejar cambios en el input del nombre
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
  
    event.preventDefault();
    setSubmitted(true);
  }
  return (
  <>
    <form onSubmit={handleSubmit}>
        <div className='formulario'>
            
              <input className='input' type="text" value={userName} onChange={handleNameChange} placeholder='Dinos tu nombre'/>
           
            <button className='button' type="submit">Enviar</button>
        </div>
    </form>
      {submitted && (
        <div>
          <p>Te damos la bienvenida {userName}!</p>
          <p>¡Bienvenidx a nuestra página de Testing!
          Ya seas un nuevx exploradorx del mundo del testing o simplemente estés buscando ampliar
           tus conocimientos, has llegado al lugar indicado. Aquí encontrarás información valiosa 
           sobre qué es el testing en programación y para qué sirve.
          Descubre cómo el testing puede mejorar la calidad del software, asegurar un rendimiento robusto 
          y detectar posibles errores antes de que afecten a tus proyectos. Explora nuestras secciones para
           obtener una visión clara y práctica sobre esta importante disciplina en el desarrollo de software.
          ¡Bienvenidx a bordo y comienza tu viaje en el fascinante mundo del testing!
          </p>
        </div>
      )}
  </>
  );
};

export default Form;