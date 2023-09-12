import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import { useTheme, useToggleTheme} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => {
  //const theme = useTheme();
  //const toggleTheme = useToggleTheme();

  
  
 // const memoizedTheme = useMemo (() => theme, [theme]); 
  return (
    
    <div>
      <Navbar/>
       <h2>Want to know more?</h2>
         <p>Send us your questions and we will contact you</p>
        
        <Form/>
      <Footer/>
    </div>
    
  )
}

export default Contact