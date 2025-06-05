 import React, { useContext, useEffect } from 'react'
 import Routing from './Routing'
 import { DataContext } from './Components/DataProvider/DataProvider'
 import { Type } from './Utility/action.type'
 import { auth } from './Utility/FireBase'
import { use } from 'react'
 function App() {
  const[{user}, dispatch] = useContext(DataContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
    if (authuser) {
      console.log(authuser);
      dispatch({
        type: SET_USER,
        user: authuser
      });
    } else{
       dispatch({
        type: SET_USER,
        user: null,
      });
      
    }
  });
}, []);
  
   return (
     <>
      < Routing/>
     </>
   )
 }
 
 export default App

 