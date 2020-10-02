import React, {useReducer} from 'react';
import llantasContext from './llantasContext';
import llantasReducer from './llantasReducer';

import {
    CASO_EJEMPLO
} from '../types';


const LlantasState = props =>{

   const initialState ={
       cargarPagina: true,
       ejemploPrueba: false,
       dinerohoy:0,
       dineroayer:0,
       objetosfactura:[]
   } 

   const [state, dispatch] = useReducer(llantasReducer, initialState);

   const funcionEjemplo = async (dato)=>{

      

       dispatch({
           type: CASO_EJEMPLO,
           payload: dato
       })
   }

   return(
       <llantasContext.Provider
       value={{
           cargarPagina: state.cargarPagina,
           ejemploPrueba: state.ejemploPrueba,
           funcionEjemplo
       }}
       >
           {props.children}
       </llantasContext.Provider>
   );
}

export default LlantasState;