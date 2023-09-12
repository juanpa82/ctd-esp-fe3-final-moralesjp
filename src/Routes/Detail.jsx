import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import Card from '../Components/Card'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [data, setData] = useState([]);  
  
  useEffect(() =>{
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/:id';
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(result => setData(result))
    .catch(error => console.error('Error:',error));
   }, []);
  return (
    <>
    <Navbar/>
      <h1>Detail Dentist id </h1>
      {data.map}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
      <Footer/>
    </>
  )
}

export default Detail