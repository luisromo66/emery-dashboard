import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { tableIcons } from './TableIcons';
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);





export default function MaterialTableDemo() {

const [datosBusqueda, setDatosBusqueda] = useState(''); 
const [categoriaBusqueda, setCategoriaBusqueda] = useState('');
const [refresh, setRefresh] = useState(false);

const [datosFireBase, setDatosFirebase] = useState([])

  const [state, setState] = useState({
    columns: [
      { title: '#Folio', field: 'name' },
      {title: 'Fecha', field: 'fecha'},
      { title: 'Nombre del cliente', field: 'surname' },
      { title: '#Llantas', field: 'birthYear'},
      {title: 'Pago', field: 'pago',  }
      
    ],
    data: datosFireBase.map((data)=>(
        {name:data.folio, surname: data.nombre, birthYear: data.llantas, fecha: data.fecha, pago: data.total, kikiribu:data.datosImpresion }

    ))
    
    
   
  });

  const traerDocumentos = ()=>{

    if(datosBusqueda === '' ){
        Swal.fire(
            'Datos Vacios',
            'escribe el dato con el que quieres buscar a los clientes',
            'warning'
          )

          return;
    }

    if(categoriaBusqueda === ''){
        Swal.fire(
            'Categoria Vacia',
            'Selecciona una categoria para poder continuar',
            'warning'
          )

          return;
    }


     db.collection("clientes").where(categoriaBusqueda,'==', (isNaN(datosBusqueda) === false ? parseInt(datosBusqueda) : datosBusqueda)).get().then((querySnapShot)=>{
         let array = []
         querySnapShot.forEach((doc)=>{ 
             array.push(doc.data());

         })

         setDatosFirebase(array);

         setRefresh(!refresh);

     }).catch(()=>{
         console.log('Hubo Un error');
     })
      
  }

  useEffect(() => {
   
    setState({
        ...state,
        data:datosFireBase.map((data)=>(
            {name:data.folio, surname: data.nombre, birthYear: data.llantas, fecha: data.fecha, pago: data.total, kikiribu:data.datosImpresion }
    
        ))
    });

     
  }, [refresh])

  

  return (
    <MaterialTable
    title={<Grid container  >
        <Grid item style={{margin:'auto'}}>
        <AccountCircle style={{marginRight:10, marginTop:20}} /><TextField onChange={(e)=>{setDatosBusqueda(e.target.value)}} 
        id="standard-basic" value={datosBusqueda} label="Ingresar busqueda.." />

        </Grid>
        <Grid item>

        <FormControl component="fieldset" style={{margin:30}}>
      <FormLabel component="legend">Buscar por: </FormLabel>
      <RadioGroup aria-label="gender" name="gender1"  onChange={(e)=>{ setCategoriaBusqueda(e.target.value)} }>
        <FormControlLabel value="folio" control={<Radio />} label="Folio" />
        <FormControlLabel value="fecha" control={<Radio />} label="Fecha" />
        <FormControlLabel value="nombre" control={<Radio />} label="Nombre del cliente" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item style={{margin:'auto'}}>
        <Button variant="contained" color="primary" onClick={traerDocumentos}>
        Buscar Clientes
      </Button>
      </Grid>
        
        
        
        </Grid>}
    style={{margin:50}}
    
      icons={tableIcons}
      actions={[
        {
          icon: PrintIcon,
          tooltip: 'Imprimir Comprobante',
          onClick: (event, rowData) =>{
            console.log(rowData);
            localStorage.setItem('folio', rowData.name);
            localStorage.setItem('datosimpresion', JSON.stringify(rowData.kikiribu));
            localStorage.setItem('nombrecliente', rowData.surname);
            localStorage.setItem('totalpagar', rowData.pago);
          
           window.open('/dashboard/crear-recibo/imprimir')
          }
        }
      ]}
      
      columns={state.columns}
      data={state.data}
      
    />
  );
}