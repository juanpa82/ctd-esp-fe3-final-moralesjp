import React, { useState } from "react";
//import ValidarEmail from "./ValidarEmail";

const Form  = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [entries, setEntries] = useState([]);

  const handleNombreCompletoChange = (e) => setNombreCompleto(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreCompleto === "" || email === "") {
      alert("Por favor, rellene todos los campos.");
  } else {
    if(nombreCompleto.length < 5 && email.length <  10){
      setEntries([...entries, { nombreCompleto, email  }]);
          setNombreCompleto("");
          setEmail("");
    };
   

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:
          <input type="text" value={nombreCompleto} onChange={handleNombreCompletoChange}/>
          </label>
        </div>
        <div>
          <label>
            email:
            <input type="text" value={email} oncghange={handleEmailChange}/>
          </label>
          
          </div>
           <button type="submit">agregar contacto</button>
      </form>
    </div>
  );
};
}
}

export default Form;
