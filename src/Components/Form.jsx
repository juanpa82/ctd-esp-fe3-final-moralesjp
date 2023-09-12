import React, { useState } from 'react';
//import ValidarEmail from './ValidarEmail';
//import { render } from "react-dom";
//import ValidarEmail from "./ValidarEmail";

const Form  = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  
  const handleNombreCompletoChange = (e) => {
    setNombreCompleto(e.target.value);
}
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }



  const handleSubmit= (e) => {
    e.preventDefault();
  }
    if (nombreCompleto < 5 ) {
      console.log("Por favor, verifique su informacion nuevamente.");
  } 
  
   
    
  return (
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input type="text" 
          value={nombreCompleto} 
          onChange={handleNombreCompletoChange}/>
         </div> 
        
        <div>
          <label>email:</label>
            <input type="email" 
            value={email} 
            onChange={handleEmailChange}/>
        </div>
           <button type="submit">agregar contacto</button>
                  
      </form>
    
  );
};



export default Form;
