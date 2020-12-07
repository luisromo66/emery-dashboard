import React,{useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid';
import BarMaster from './BarMaster';
import DougnutMaster from './DougnutMaster';
import CurvaGrafico from './CurvaGrafico';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        height: theme.spacing(6),
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 520,
      marginTop:30,
      marginLeft:30,
      marginBottom:20

    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
  }));

  

  const PaperEstadisticas = () => {
   
    {/*Vector Ingresos*/}
   const [dataEfectivo, setDataEfectivo] = useState([]);

    {/*Vector Arboles*/}
    const [dataArboles, setDataArboles] = useState([]);

     {/*Vector Clientes nuevos*/}
   const [dataClientes, setDataClientes] = useState([]);

    const [dataLlantas, setDataLlantas] = useState();
    const [etiquetaSucursales, setEtiquetaSucursales] = useState('');
    const [esMaster, setEsMaster] = useState(false);
    const [open, setOpen] = useState(false);

    const etiquetaVentas = 'Cantidad';


    useEffect(()=>{

    

         let datosEfectivoFirebase = [];
         let datosArbolesFirebase = [];
         let datosClientesNuevosFirebase = [];

        //  setOpen(true);
            (async()=>{

              await db.collection('estadisticas').orderBy("numeroMes", "asc").get().then((querySnapshot)=>{

                querySnapshot.forEach((doc)=>{
                   datosEfectivoFirebase.push(doc.data().dineroMes);
                   datosArbolesFirebase.push(doc.data().arboles);
                   datosClientesNuevosFirebase.push(doc.data().clientesNuevos);
                })
      
      
              });
              console.log(datosArbolesFirebase);
              setDataArboles(datosArbolesFirebase);
              setDataClientes(datosClientesNuevosFirebase);
              setDataEfectivo(datosEfectivoFirebase);
              //setOpen(false);


              

            })()




    },[])

    const cambiarDatosEstadistica = async (e)=>{

      setOpen(true);
      let datosEfectivoFirebase = [];
      let datosLlantasFirebase = [];

      setEtiquetaSucursales(e.target.value);

        if(e.target.value === 0){

          (async()=>{

            await db.collection('estadisticas').orderBy("numeromes", "asc").get().then((querySnapshot)=>{

              querySnapshot.forEach((doc)=>{
                 datosEfectivoFirebase.push(doc.data().efectivo);
                 datosLlantasFirebase.push(doc.data().llantas);
              })
    
    
            });

            setDataEfectivo(datosEfectivoFirebase);
            setDataLlantas(datosLlantasFirebase);
            setOpen(false);


            

          })()


        }

        if(e.target.value === 1){

          (async()=>{

            await db.collection('estadisticas').orderBy("numeromes", "asc").get().then((querySnapshot)=>{

              querySnapshot.forEach((doc)=>{
                 datosEfectivoFirebase.push(doc.data().efectivo1);
                 datosLlantasFirebase.push(doc.data().llantas1);
              })
    
    
            });

            setDataEfectivo(datosEfectivoFirebase);
            setDataLlantas(datosLlantasFirebase);
            setOpen(false);


          })()

        }

        if(e.target.value === 2){

          (async()=>{

            await db.collection('estadisticas').orderBy("numeromes", "asc").get().then((querySnapshot)=>{

              querySnapshot.forEach((doc)=>{
                 console.log('$'+(doc.data().efectivoBase).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
                 datosEfectivoFirebase.push(doc.data().efectivoBase);
                 datosLlantasFirebase.push(doc.data().llantasBase);
              })

              
    
    
            });

            setDataEfectivo(datosEfectivoFirebase);
            setDataLlantas(datosLlantasFirebase);
            setOpen(false);


          })()
          
        }


    }

    const classes = useStyles();
      return ( 
        <div className={classes.root}>

            {/*Selector de sucursal para estadisticas */}

           {esMaster === true &&
             <FormControl variant="outlined" className={classes.formControl}>
             <InputLabel id="demo-simple-select-outlined-label">Datos a mostrar</InputLabel>
             <Select
               labelId="demo-simple-select-outlined-label"
               id="demo-simple-select-outlined"
               value={etiquetaSucursales}
               onChange={cambiarDatosEstadistica}
               label="Datos a mostrar"
             >
           
               <MenuItem value={0}>Sucursal Mercado del Mar</MenuItem>
               <MenuItem value={1}>Sucursal Arcos de Zapopan</MenuItem>
               <MenuItem value={2}>Todas las sucursales</MenuItem>
             </Select>
           </FormControl>
           
           } 

      
        <Grid container spacing={3}>
      
       {/*Ingresos */}
        <Grid item xs={12} >
    <Paper elevation={3} style={{padding:25}}>
    <CurvaGrafico
      dataMaster={dataEfectivo}
      etiqueta={etiquetaVentas}
    />
    <Typography component="div">
      <Box textAlign="center" fontSize={25} m={1} >
         Ingresos 
      </Box>
      </Typography>
    </Paper>
    </Grid>
  

         {/*Arboles plantados */}

        <Grid item xs={12} style={{marginBottom:30}}>
    <Paper elevation={3} style={{padding:25}} >
    <CurvaGrafico
      dataMaster={dataArboles}
      etiqueta={etiquetaVentas}
    />
    <Typography component="div">
      <Box textAlign="center" fontSize={25} m={1} >
       Arboles plantados 
      </Box>
      </Typography>
    </Paper>
    </Grid>
        
     
        
  
   
     {/* */}
    <Backdrop className={classes.backdrop} open={false} >
    <CircularProgress color="inherit" />
  </Backdrop>
    
    </Grid>
  
    

  </div>
       );
  }
   
  export default PaperEstadisticas;