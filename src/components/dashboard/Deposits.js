import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({numero,esdinero,titulo, fechaMaster, botonMaster, setRefresh, refresh, GuardarDatos, fecha, datosNoVacios, numeroFolio}) {
  const classes = useStyles();



    const enviarDatos = async()=>{

        if(datosNoVacios.length === 0){

          Swal.fire(
            'Datos Vacios',
            'Al parecer no ingresaste ningun dato, ingresalos para poder continuar',
            'warning'
          )
        }else{

          if(numeroFolio === 0){
            Swal.fire(
              'Problema con el folio',
              'Hubo un problema con el folio, recarga la pagina para resolverlo',
              'error'
            )

          }else{

        Swal.fire({
            title: '¿Estas seguro que finalizaste?',
            text: "Verifica que los datos esten correctos antes de imprimir, una vez aceptado se generara la hoja de impresion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Generar impresion',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
    
                (async ()=>{

                  const datos = await db.collection('datosDashboard').doc('7J2XIy9UxcodG5uElShj');
          
              //await datos.get().then((doc)=>{
              //    console.log(doc.data().ventasAyer);
          
              //})
          
                  await datos.get().then((doc)=>{
                      const numerofolio = doc.data().numerofolio+1;
                      const numeroFolioArcos = doc.data().numeroFolioArcos+1;
                     


                      firebase.auth().onAuthStateChanged((datosInfo)=>{

                        if(datosInfo.email === 'ivettemiazoe@gmail.com'){

                          datos.update({numeroFolioArcos}).then(()=>{
                            
                        })
              

                        }else{

                          datos.update({numerofolio}).then(()=>{
                            
                        })

                        }

                      })
          
                   

                     
                  })
                  setRefresh(!refresh);
                  GuardarDatos();
                  Swal.fire(
                    '!Recibo exitoso!',
                    'Los datos han sido guardados correctamente.',
                    'success'
                  )
          
              
          
              })()
             
            }
          })
        }

        }

    }
   
  return (
    <React.Fragment>
      <Title>{titulo}</Title>
      <Typography component="p" variant="h4">
        {(esdinero === true ? '$' : '')+ numero}
      </Typography>
      {fechaMaster && <Typography color="textSecondary" className={classes.depositContext}>
      {fecha}
      </Typography>}
      { botonMaster &&<div style={{marginTop:80}}>
        <Button variant="contained" color="primary" onClick={enviarDatos}>
        Imprimir Recibo
      </Button>
      </div>}
      
    </React.Fragment>
  );
}