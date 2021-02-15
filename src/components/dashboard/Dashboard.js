import React,{useEffect, useState, useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItems from './ListItems';
import Loading from '../Ui/Loading';
import { useHistory } from "react-router-dom";
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
  const [activadorLoading, setActivadorLoading] = useState(false);
  const [triggerCarga, setTriggerCarga] = useState(false);
  const [usuarioFirebase, setUsuarioFirebase] = useState('');

  let router = useHistory();

  const [datosEstadisticos, setDatosEstadisticos] = useState({
    todas: 0,
    respondidas: 0,
    pendientes: 0,
    noInteresa: 0,
    contratadas: 0,
    canceladas: 0,

  });

  
    
    


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  

 
  useEffect(()=>{

    
    

    (async()=>{
       await firebase.auth().onAuthStateChanged(usuario=>{
        if(!usuario){
          router.push('/');
        }else{
          setUsuarioFirebase(usuario.email);
        
        }
      } )


       setActivadorLoading(true);
      const datos = await db.collection('datosGenerales').doc('LwBPHDbibuKc2Xi7j9q6');

      await datos.get().then((datos)=>{

        const doc = datos.data();
        setDatosEstadisticos({
          ...datosEstadisticos,
          ['todas']: doc.todas,
          ['respondidas']: doc.respondidas,
          ['pendientes']: doc.pendientes,
          ['noInteresa']: doc.noInteresa,
          ['contratadas']: doc.contratadas,
          ['canceladas']: doc.canceladas
        }
          )
       setActivadorLoading(false);

      }).catch(()=>{
        setActivadorLoading(false);
      })



    })()

  },[])

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
            EmeryMark Dashboard Idioma INGLES
          </Typography>
          
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
        <List><ListItems open={open} triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga} usuario={usuarioFirebase}/></List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
         {palabra === 'dashboard' ? <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
           

          </Grid>
          <Loading activadorLoading={activadorLoading}/>
        </Container> : 
      palabra === 'ordenes-manuales'? <TablaClientes /> :
      palabra === 'maquinas-de-helado-duro'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='maquinas de helado duro'/> :
      palabra === 'maquinas-de-helado-suave'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='maquinas de helado suave'/> :
      palabra === 'maquinas-paleteras'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='maquinas paleteras'/> :
      palabra === 'bases-para-helado'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='bases para helado'/> :
      palabra === 'otros-y-accesorios'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='otros y accesorios'/> :
      palabra === 'slider'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='slider'/> :
      palabra === 'recetas'? <TablaClientes palabra={palabra}  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}  categoria='recetas'/> :
      palabra === 'pendientes'? <TablaClientes palabra='pendientes'  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}/> :
      <TablaClientes palabra='contratadas'  triggerCarga={triggerCarga} setTriggerCarga={setTriggerCarga}/> 
         
}
      </main>
    </div>
  );
}