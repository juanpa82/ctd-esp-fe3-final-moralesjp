import React from "react";


const Card = ({ name, userName, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
    <img src="./images/doctor.jpg" alt="doctor"/>
    

        
        <h2>Name: {name}</h2>
        <p>username: {userName}</p>
        <p>ID: {id}</p>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
