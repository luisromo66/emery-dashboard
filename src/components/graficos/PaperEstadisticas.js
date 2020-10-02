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

   const [dataEfectivo, setDataEfectivo] = useState([]);
    const [dataLlantas, setDataLlantas] = useState();
    const [etiquetaSucursales, setEtiquetaSucursales] = useState('');
    const [esMaster, setEsMaster] = useState(false);
    const [open, setOpen] = useState(false);

    const etiquetaVentas = 'Ventas del mes señalado';
    const etiquetaLlantas = 'Llantas vendidas';


    useEffect(()=>{

    

         let datosEfectivoFirebase = [];
         let datosLlantasFirebase = [];

          setOpen(true);
         firebase.auth().onAuthStateChanged(userInfo =>{

          if(userInfo.email === 'ffernandezg1521@hotmail.com' || userInfo.email === 'fernys58@hotmail.com'){
            setEsMaster(true);
          }

          if(userInfo.email === 'luistlaquepaque@gmail.com' || userInfo.email === 'ffernandezg1521@hotmail.com' || userInfo.email === 'fernys58@hotmail.com'){



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
    
          if(userInfo.email === 'ivettemiazoe@gmail.com'){


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
          if(userInfo.email === 'campechano2231@gmail.com'){
            


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

          
         })

    

        

        
         

           

    

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
      
    <Grid item xs={6}>
    <Paper elevation={3} >
        <BarMaster
           dataMaster={dataEfectivo}
           etiqueta={etiquetaVentas}
        />
        <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
     Ventas del año 2220
      </Box>
      </Typography>
    
    </Paper>
    </Grid>
    <Grid item xs={6}>
    <Paper elevation={3} >
    <CurvaGrafico
      dataMaster={dataEfectivo}
      etiqueta={etiquetaVentas}
    />
    <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
         Ventas del año 2220
      </Box>
      </Typography>
    </Paper>
    </Grid>
    <Grid item xs={6}>
    <Paper elevation={3} >
        <BarMaster
        dataMaster={dataLlantas}
        etiqueta={etiquetaLlantas}
        />
        <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
      Numero de Llantas vendidas del año 2220
      </Box>
      </Typography>
    
    </Paper>
    </Grid>
    <Grid item xs={6}>
    <Paper elevation={3} >
    <CurvaGrafico
    dataMaster={dataLlantas}
    etiqueta={etiquetaLlantas}
    />
    <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
         Numero de Llantas vendidas del año 2220
      </Box>
      </Typography>
    </Paper>
    </Grid>
    <Grid item xs={6}>
    <Paper elevation={3} >
    <DougnutMaster dataMaster={dataLlantas}/>
    <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
         Llantas vendidas
      </Box>
      </Typography>
    </Paper>
    </Grid>
    <Grid item xs={6}>
    <Paper elevation={3} >
    <DougnutMaster     dataMaster={dataEfectivo}/>
    <Typography component="div">
      <Box textAlign="center" fontSize={30} m={1} style={{marginBottom:40}}>
         Ventas
      </Box>
      </Typography>
    </Paper>
    </Grid>
    <Backdrop className={classes.backdrop} open={open} >
    <CircularProgress color="inherit" />
  </Backdrop>
    
    </Grid>
  
    

  </div>
       );
  }
   
  export default PaperEstadisticas;