import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import { useTheme, useToggleTheme } from '../Components/utils/global.context'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const [data, setData] = useState([]);  
  
  useEffect(() =>{
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(result => setData(result))
    .catch(error => console.error('Error:',error));
   }, []);
  
   return (
    <main className="lista" >
      <Navbar/>
      <h1>Home</h1>
      

      <div className='card-grid'>
      <Card/>
      <ul>
        {data.map(item =>(
        <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
        {/* Aqui deberias renderizar las cards */}
      </div>
      <Footer/>
    </main>
  )
  
}


export default Home