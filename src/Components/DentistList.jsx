import React, { useEffect, useState, useReducer } from 'react';
import Card from './Card';
import { reducer, initialState } from '../Reducers/favReducer';

const DentistList = () => {
  const [dentist, setDentist] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites } = state;

  useEffect(() => {
    // Realiza la solicitud a la API y guarda los datos en el estado
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='card-grid'>
      {dentist.map((dentist) => (
        <div key={dentist.id}>
        {/* <div className="card">
          <div className="card-content">
            <h2>{dentist.name}</h2>
            <p>Nombre de usuario: {dentist.username}</p>
          </div> */}
          <Card 
          name={dentist.name} 
          username={dentist.username} 
          id={dentist.id} 
          isFavorite={favorites.some((fav) => fav.id === dentist.id)}
          dispatch={dispatch}
          />
        </div>
      ))}
    </div>
  );
};

export default DentistList;
