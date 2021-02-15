import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Grid from '@material-ui/core/Grid';

const DatosTecnicosFirebase = ({setMultipleObject,multipleObject, dato, i }) => {

   const [detalle, setDetalle] = useState({
       palabra1:'',
       palabra2:''
   })

   const [verificador, setVerificador] = useState(false);

   const onChange = (e)=>{
    setDetalle({
      ...detalle,
      [e.target.name]: e.target.value
    })
  }

    return (
              <>
        <Grid item xs={8}>

      
             <IconButton onClick={()=>{const nuevoArrayFicha = multipleObject.arrayFicha.filter((cita,index) => index !== i ); setMultipleObject({...multipleObject, ['arrayFicha']: nuevoArrayFicha})}}>
             <RemoveCircleIcon/>
             </IconButton>

          
         
       
        <TextField id="outlined-basic" label="Titulo 1" variant="outlined" 
        defaultValue={dato.palabra1}
        disabled={true}
        onChange={onChange}
        name='palabra1'/>
        </Grid>    
        <Grid item xs={4}>
        <TextField id="outlined-basic" label="Titulo 2" variant="outlined" 
        defaultValue={dato.palabra2}
        disabled={true}
        onChange={onChange}
        name='palabra2'/>
        </Grid>
             </>
     );
}
 
export default DatosTecnicosFirebase;