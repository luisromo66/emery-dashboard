import React,{useEffect, useState, useContext} from 'react';
import clsx from 'clsx';
import llantasContext from '../../context/llantasContext';
import CrearRecibo from './CrearRecibo';
import tableIcons from './TableIcons';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PaperEstadisticas from '../graficos/PaperEstadisticas';
import ListItems from './ListItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import TablaClientesBaseDatos from './TablaClientesBaseDatos';
import TablaClientes from './TablaClientes';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#333'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({palabra}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [datosEstadisticos, setDatosEstadisticos] = useState({
    efectivoHoy: 0,
    efectivoAyer: 0,
    llantasHoy: 0,
    llantasAyer: 0,
  });

  
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let año = fecha.getFullYear();

    let fechaActual = (dia === 1 ?'0': dia === 2 ?'0':dia === 3 ?'0': dia === 4 ?'0': dia === 5 ?'0':dia === 6 ?'0':dia === 7 ?'0':dia === 8 ?'0': dia === 9 ?'0':'')+dia+'/'+(mes === 10 ? '': mes === 11 ? '': mes === 12 ? '': '0') +mes+'/'+año;
    


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const llantassContext = useContext(llantasContext);
  const {cargarPagina, ejemploPrueba, funcionEjemplo, dinerohoy, dinerohyer} = llantassContext;

 
  useEffect(()=>{

   
     
   
      
      function time() {
  
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
  
        if(h===9){
          localStorage.setItem("9", localStorage.getItem("dineroHoy"));
        }
        if(h===10){
          localStorage.setItem("10", localStorage.getItem("dineroHoy"));
        }
        if(h===11){
          localStorage.setItem("11", localStorage.getItem("dineroHoy"));
        }
        if(h===12){
          localStorage.setItem("12", localStorage.getItem("dineroHoy"));
        }
        if(h===13){
          localStorage.setItem("13", localStorage.getItem("dineroHoy"));
        }
        if(h===14){
          localStorage.setItem("14", localStorage.getItem("dineroHoy"));
        }
        if(h===15){
          localStorage.setItem("15", localStorage.getItem("dineroHoy"));
        }
        if(h===16){
          localStorage.setItem("16", localStorage.getItem("dineroHoy"));
        }
        if(h===17){
          localStorage.setItem("17", localStorage.getItem("dineroHoy"));
        }
        if(h===18){
          localStorage.setItem("18", localStorage.getItem("dineroHoy"));
        }
        if(h===19){
          localStorage.setItem("19", localStorage.getItem("dineroHoy"));
        }
        if(h===20){
          localStorage.setItem("20", localStorage.getItem("dineroHoy"));
        }
      
      }
      
      setInterval(time, 1000);
    



    firebase.auth().onAuthStateChanged(userInfo =>{
      console.log(userInfo.email);  //MEGA MASTER: esta funcion te sirve para decirte si esta logueado o no

      if(localStorage.getItem('fechaAnterior') && localStorage.getItem('fechaActual')){

        
       if(fechaActual === localStorage.getItem('fechaActual')){

            console.log('Son iguales');

           }
            
           //Nuevo Dia
           if(fechaActual !== localStorage.getItem('fechaActual')){

           (async()=>{

            const datos = await db.collection('estadisticas').doc(mes.toString());

            

             await datos.get().then((doc)=>{

            let dinerototal = localStorage.getItem('dineroHoy');
            let llantastotal = localStorage.getItem('llantasHoy');

        

            const efectivo = doc.data().efectivo+=parseInt(dinerototal)
            const efectivo1 = doc.data().efectivo1+=parseInt(dinerototal)
            const efectivoBase = doc.data().efectivoBase+=parseInt(dinerototal)
            const llantas = doc.data().llantas+=parseInt(llantastotal)
            const llantas1 = doc.data().llantas1+=parseInt(llantastotal)
            const llantasBase = doc.data().llantasBase+=parseInt(llantastotal)

            if(userInfo.email === 'luistlaquepaque@gmail.com' || userInfo.email === 'ffernandezg1521@hotmail.com' || userInfo.email === 'fernys58@hotmail.com' || userInfo.email === 'campechano2231@gmail.com'){

              datos.update({efectivo,efectivoBase,llantas,llantasBase}).then(()=>{
                for(let i = 9; i <=20; i++){
                  localStorage.setItem(`${i}`,0)
                }
                localStorage.setItem('dineroAyer', localStorage.getItem('dineroHoy'));
                localStorage.setItem('llantasAyer',  localStorage.getItem('llantasHoy'));
                localStorage.setItem('dineroHoy', 0);
                localStorage.setItem('llantasHoy', 0);
                localStorage.setItem('fechaAnterior', localStorage.getItem('fechaActual'));
                localStorage.setItem('fechaActual', fechaActual);
                localStorage.setItem('arrayHoy', '[]');
                            
              })
    
            }

            if(userInfo.email === 'ivettemiazoe@gmail.com'){
               
              for(let i = 9; i <=20; i++){
                localStorage.setItem(`${i}`,0)
              }
              datos.update({efectivo1,efectivoBase,llantas1,llantasBase}).then(()=>{
                localStorage.setItem('dineroAyer', localStorage.getItem('dineroHoy'));
                localStorage.setItem('llantasAyer',  localStorage.getItem('llantasHoy'));
                localStorage.setItem('dineroHoy', 0);
                localStorage.setItem('llantasHoy', 0);
                localStorage.setItem('fechaAnterior', localStorage.getItem('fechaActual'));
                localStorage.setItem('fechaActual', fechaActual);
                localStorage.setItem('arrayHoy', '[]');
                            
              })
      
              
            }
            

                

           })

           })()
          
      
            
      
         


            

          //  (async()=>{

          //    const datos = await db.collection('estadisticas').doc(mes);
            //  await datos.get().then((doc)=>{
                

           //   })


            //  })

          //  })()

           }

      }else{
        //PRIMERA VEZ QUE SE USA
        for(let i = 9; i <=20; i++){
          localStorage.setItem(`${i}`,0)
        }
        localStorage.setItem('fechaActual', fechaActual);
        localStorage.setItem('fechaAnterior', (dia === 1 ?'0': dia === 2 ?'0':dia === 3 ?'0': dia === 4 ?'0': dia === 5 ?'0': dia === 6 ?'0':dia === 7 ?'0':dia === 8 ?'0': dia === 9 ?'0':'')+(dia-1)+'/'+(mes === 10 ? '': mes === 11 ? '': mes === 12 ? '': '0') +mes+'/'+año);
        localStorage.setItem('dineroHoy', 0);
        localStorage.setItem('dineroAyer', 0);
        localStorage.setItem('llantasHoy', 0);
        localStorage.setItem('llantasAyer', 0);
        localStorage.setItem('arrayHoy', '[]');
      }

     
      
  })

    console.log(palabra);  


  },[cargarPagina])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Mudanzas Gana Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><ListItems open={open}/></List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
         {palabra === 'dashboard' ? <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
           
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits 
                  fechaMaster={true}
                  numero={0}
                  titulo='Todas'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits 
                  numero={0}
                  titulo='Pendientes'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits 
                  numero={0}
                  titulo='Respondidas'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits 
                  numero={0}
                  titulo='No interesa'
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits 
                  numero={0}
                  titulo='Contratadas'
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits 
                  numero={0}
                  titulo='Canceladas'
                />
              </Paper>
            </Grid>

          

            <PaperEstadisticas/>
            {/* Recent Orders */}
           
          </Grid>
         
        </Container> : palabra === 'recibo'? <CrearRecibo/> : palabra === 'clientes'? <Grid item xs={12}>
              
              <TablaClientesBaseDatos/>
            
          </Grid>
        :
         <TablaClientes/>
}
      </main>
    </div>
  );
}