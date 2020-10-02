import React,{forwardRef, useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './TableIcons';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './Deposits';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
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

export default function MaterialTableDemo() {
    const classes = useStyles();

    let [suma, setSuma] = useState(0);
    const [datosNoVacios, setDatosNoVacios] = useState(true);
    let [sumallantas, setSumaLlantas] = useState(0);
    const [nombreCliente, setNombreCliente] = useState('');
    const [refresh, setRefresh] = useState(false);
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let año = fecha.getFullYear();
    let fechaActual = (dia === 1 ?'0': dia === 2 ?'0':dia === 3 ?'0': dia === 4 ?'0': dia === 5 ?'0':dia === 6 ?'0':dia === 7 ?'0':dia === 8 ?'0': dia === 9 ?'0':'')+dia+'/'+(mes === 10 ? '': mes === 11 ? '': mes === 12 ? '': '0') +mes+'/'+año;
   

    const [numeroaleatorio, setNumeroAleatorio]= useState(0);
  
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [state, setState] = useState({
    columns: [
      { title: 'Unidades', field: 'name',  type: 'numeric' },
      { title: 'Descripcion', field: 'surname' },
      { title: 'P. Unitario', field: 'birthYear', type: 'numeric' },
      { title: 'Precio total', field:'total',emptyValue:0,},

    ],
    data: [
   
    ],
  });


  const GuardarDatos = async ()=>{

  

    let suma1 = JSON.parse(localStorage.getItem('dineroHoy'));
    let suma2 = JSON.parse(localStorage.getItem('llantasHoy'));

    let arrayHoy = JSON.parse(localStorage.getItem('arrayHoy'));
    let arrayMaster = {
      nombre: nombreCliente,
      fecha: fechaActual,
      folio: numeroaleatorio,
      total: suma ,
      llantas:  sumallantas,
      datosImpresion:[
        state.data
      ]
    }

    let arrayMasterDb = {
      nombre: nombreCliente,
      fecha: fechaActual,
      folio: numeroaleatorio,
      total: suma ,
      llantas:  sumallantas,
      datosImpresion:[
        state.data[0]
      ]
    }

   await db.collection("clientes").doc().set(arrayMasterDb);

   

    arrayHoy.push(arrayMaster);
    

    localStorage.setItem('arrayHoy', JSON.stringify(arrayHoy));
    localStorage.setItem('dineroHoy', suma1+=suma);
    localStorage.setItem('llantasHoy', suma2+=sumallantas);
 

    localStorage.setItem('datosimpresion', JSON.stringify(state.data));
    localStorage.setItem('totalpagar', suma);
    localStorage.setItem('totalLlantas', sumallantas);
    localStorage.setItem('folio', numeroaleatorio);
    localStorage.setItem('nombrecliente', nombreCliente);
    localStorage.setItem('fecha',fechaActual);
    window.open("/dashboard/crear-recibo/imprimir");
  }

  useEffect(() => {

    if(localStorage.getItem('arrayHoy') === null){
      localStorage.setItem('arrayHoy', '[]');
    }

    (async ()=>{

      const datos = await db.collection('datosDashboard').doc('7J2XIy9UxcodG5uElShj');

  //await datos.get().then((doc)=>{
  //    console.log(doc.data().ventasAyer);

  //})
      
      firebase.auth().onAuthStateChanged((userInfo)=>{

        if(userInfo.email === 'ivettemiazoe@gmail.com'){

            (async()=>{

              await datos.get().then((doc)=>{
                setNumeroAleatorio(doc.data().numeroFolioArcos);
              })

            })()

        }else{

            (async()=>{

              await datos.get().then((doc)=>{
                setNumeroAleatorio(doc.data().numerofolio);
              })


            })()

        }

      })

  })()
 

    setSumaLlantas(0);
    setSuma(0);
    setNombreCliente('');
    setState({
        ...state,
        data:[]
    });
      
  }, [refresh])

  return (
      <>

<main className={classes.content}>
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           
            {/* Recent Deposits */}
           
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits
                  numero={numeroaleatorio}
                  esdinero={false}
                  titulo='Numero de Folio'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits
                numero={fechaActual}
                esdinero={false}
                titulo='Fecha'
                
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits 
                numero={sumallantas}
                esdinero={false}
                titulo='# Total de llantas'
                
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits 
                numero={parseFloat(suma).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                esdinero={true}
                titulo='Total a pagar'
                botonMaster={true}
                setRefresh={setRefresh}
                refresh={refresh}
                GuardarDatos={GuardarDatos}
                datosNoVacios={state.data}
                numeroFolio={numeroaleatorio}
                
                />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              
            <MaterialTable
      title={<Grid container  alignItems="flex-end"><AccountCircle style={{marginRight:10}} /><TextField onChange={(e)=>{setNombreCliente(e.target.value)}} id="standard-basic" value={nombreCliente} label="Nombre del Cliente" /></Grid>}
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const valor1 = newData.name;
                const valor2 = newData.birthYear;
                const resultado = (valor1 * valor2);
              setState((prevState) => {
                const data = [...prevState.data];
                

                data.push(newData);
                
                return { ...prevState, data };
              });
              setSuma(suma += (resultado));
              setSumaLlantas(sumallantas += parseInt(valor1));
              newData.total = resultado;
              //setSuma(data+=(newData));
              
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const valor1 = oldData.name;
                const valor2 = oldData.birthYear;
                const resultado = (valor1 * valor2);
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });

              setSuma(suma -= (resultado));
              setSumaLlantas(sumallantas -= parseInt(valor1));
              oldData.total = resultado;
            }, 600);
          }),
      }}
    />

   
              
            </Grid>
          </Grid>
          
        </Container>
      </main>
    

    </>
  );
}