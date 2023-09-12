import React from 'react'

import { Link } from 'react-router-dom'
import { useTheme, useToggleTheme } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
    
    const theme = useTheme();
    const toggleTheme = useToggleTheme();
  
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Details">Details</Link>
      <Link to="/Favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <button onClick={toggleTheme}>
        Change theme
        </button>
      </div>
    </nav>
  )
}

export default Navbar