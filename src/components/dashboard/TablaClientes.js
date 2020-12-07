import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from './TableIcons';
import PrintIcon from '@material-ui/icons/Print';
import Swal from 'sweetalert2';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyIcon from '@material-ui/icons/Money';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';

import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);

export default function MaterialTableDemo({palabra, triggerCarga, setTriggerCarga}) {

  const [state, setState] = React.useState({
    columns: [
      { title: '#Id Pedido', field: 'name' },
      {title: 'Fecha', field: 'fecha'},
      { title: 'Nombre del cliente', field: 'surname' },
      { title: 'Telefono', field: 'telefono'},
      { title: 'Tipo de servicio', field: 'servicio'},
      {title: 'Pago', field: 'pago',  },
      { title: 'Estado', field: 'estado',  lookup: { 34: <p style={{margin:0, color:'limegreen'}}>{'PAGADO'}</p>, 63: <p style={{margin:0, color:'red'}}>{'NO PAGADO'}</p> }},
      
    ],
    data: []
    
    
  
  });

  const modificarPrecioFirebase = async (numeroOrden,dinero)=>{
    dinero = parseInt(dinero);

    await db.collection('ordenes').where('ordenId','==', numeroOrden).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          db.collection('ordenes').doc(doc.id).update({
            costo: dinero.toFixed(2)
          }).then(()=>{
          setTriggerCarga(!triggerCarga);

        })


      });

  });

    

  }

  const estadoPagadoFirebase = async (numeroOrden, checador, dinero)=>{
     
    if(checador === 'pagado'){
     await db.collection('ordenes').where('ordenId','==', numeroOrden).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          db.collection('ordenes').doc(doc.id).update({
            pagoRealizado: true
          }).then(()=>{
            db.collection('datosGenerales').doc('LwBPHDbibuKc2Xi7j9q6').update({

              contratadas:  firebase.firestore.FieldValue.increment(1),
              pendientes: firebase.firestore.FieldValue.increment(-1)

          }).then(()=>{
            let d = new Date();
          let n = d.getMonth()+1;
          db.collection('estadisticas').doc(n.toString()).update({

              
            dineroMes: firebase.firestore.FieldValue.increment(parseFloat(dinero)),
            arboles: firebase.firestore.FieldValue.increment(1)
           

        }).then(()=>{
          setTriggerCarga(!triggerCarga);

        })


        })
           
            
  
           })
      });

  });

  }

  if(checador === 'no pagado'){
    await db.collection('ordenes').where('ordenId','==', numeroOrden).get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
         db.collection('ordenes').doc(doc.id).update({pagoRealizado: false}).then(()=>{
          db.collection('datosGenerales').doc('LwBPHDbibuKc2Xi7j9q6').update({

            contratadas:  firebase.firestore.FieldValue.increment(-1),
            pendientes: firebase.firestore.FieldValue.increment(1)

        }).then(()=>{
          setTriggerCarga(!triggerCarga);

        }).then(()=>{
          let d = new Date();
          let n = d.getMonth()+1;
          db.collection('estadisticas').doc(n.toString()).update({


            dineroMes: firebase.firestore.FieldValue.increment(-parseFloat(dinero)),
            arboles: firebase.firestore.FieldValue.increment(-1)
           

        })
          
        }).then(()=>{
          setTriggerCarga(!triggerCarga);

        })

         })
     });
     

 });

 }
}


  useEffect(()=>{
    let datosClientesNuevosFirebase = [];
    let datosClientesNuevosMaster = [];

    if(palabra === 'todas'){
      (async()=>{

        await db.collection('ordenes').get().then((querySnapshot)=>{
  
          querySnapshot.forEach((doc)=>{
             datosClientesNuevosFirebase.push(doc.data());
             
          })
  
  
        });
  
        datosClientesNuevosFirebase.map((dato,index)=>{

          let {horaEntrega, fecha} = dato;

          horaEntrega = new Date(horaEntrega.toDate());
          fecha = new Date(fecha.toDate());
          let posicionSol = ''
   
          if(horaEntrega.getHours() >= 12){
              posicionSol = ' P.M'
          }
          if(horaEntrega.getHours() < 12){
           posicionSol = ' A.M'
          }

          horaEntrega = horaEntrega.getHours() + ':'+ horaEntrega.getMinutes()+posicionSol;
               
                      fecha = fecha.getMonth()+'/'+fecha.getDay()+'/'+ fecha.getFullYear();
              
          return(
          datosClientesNuevosMaster.push({name: dato.ordenId, surname: dato.nombre+' '+dato.apellidos ,fecha: fecha, pago: dato.costo+' $', estado: dato.pagoRealizado === true? 34 : 63, servicio: dato.palabraCategoria,
           telefono: dato.telefono1})
          )
        })
  
  
        console.log(datosClientesNuevosMaster);
        setState(
          {
            ...state,
            ['data']: datosClientesNuevosMaster
          }
        );

      })()

    }

    if(palabra === 'pendientes'){
      (async()=>{

        await db.collection('ordenes').where('pagoRealizado','==',false).get().then((querySnapshot)=>{
  
          querySnapshot.forEach((doc)=>{

             datosClientesNuevosFirebase.push(doc.data());
             
          })
  
  
        });
  
        datosClientesNuevosFirebase.map((dato,index)=>{

          let {horaEntrega, fecha} = dato;

          horaEntrega = new Date(horaEntrega.toDate());
          fecha = new Date(fecha.toDate());
          let posicionSol = ''
   
          if(horaEntrega.getHours() >= 12){
              posicionSol = ' P.M'
          }
          if(horaEntrega.getHours() < 12){
           posicionSol = ' A.M'
          }

          horaEntrega = horaEntrega.getHours() + ':'+ horaEntrega.getMinutes()+posicionSol;
               
                      fecha = fecha.getMonth()+'/'+fecha.getDay()+'/'+ fecha.getFullYear();
          
          return(
          datosClientesNuevosMaster.push({name: dato.ordenId, surname: dato.nombre+' '+dato.apellidos ,fecha: fecha, pago: dato.costo+' $', estado: dato.pagoRealizado === true? 34 : 63,
           telefono: dato.telefono1, servicio: dato.palabraCategoria})
          )
      })
  
  
        console.log(datosClientesNuevosMaster);
        setState(
          {
            ...state,
            ['data']: datosClientesNuevosMaster
          }
        );
      })()
      
    }

    if(palabra === 'contratadas'){

      (async()=>{

        await db.collection('ordenes').where('pagoRealizado','==',true).get().then((querySnapshot)=>{
  
          querySnapshot.forEach((doc)=>{
            
             datosClientesNuevosFirebase.push(doc.data());
             
          })
  
  
        });
  
        datosClientesNuevosFirebase.map((dato,index)=>{
          let {horaEntrega, fecha} = dato;

          horaEntrega = new Date(horaEntrega.toDate());
          fecha = new Date(fecha.toDate());
          let posicionSol = ''
   
          if(horaEntrega.getHours() >= 12){
              posicionSol = ' P.M'
          }
          if(horaEntrega.getHours() < 12){
           posicionSol = ' A.M'
          }

          horaEntrega = horaEntrega.getHours() + ':'+ horaEntrega.getMinutes()+posicionSol;
               
                      fecha = fecha.getMonth()+'/'+fecha.getDay()+'/'+ fecha.getFullYear();
          
          return(
            datosClientesNuevosMaster.push({name: dato.ordenId, surname: dato.nombre+' '+dato.apellidos ,fecha: fecha, pago: dato.costo+' $', estado: dato.pagoRealizado === true? 34 : 63,
           telefono: dato.telefono1,servicio: dato.palabraCategoria})
          )
        })
  
  
        console.log(datosClientesNuevosMaster);
        setState(
          {
            ...state,
            ['data']: datosClientesNuevosMaster
          }
        );
      })()
      
    }
   
 

  },[triggerCarga])
     
  

  return (
    <MaterialTable
      title=""
      icons={tableIcons}
      actions={[
        {
          icon: PrintIcon,
          tooltip: 'Imprimir Comprobante',
          onClick: (event, rowData) =>{

            (async()=>{

              await db.collection('ordenes').where('ordenId','==',rowData.name).get().then((querySnapshot)=>{
        
                querySnapshot.forEach((doc)=>{
                 
                  let datos = doc.data();
                  let urlPdf = '';

                  let {apellidos, arrayOrden, costo, espacioCantidad, fecha, horaEntrega,
                        kilometros, nombre, ordenId, pagoRealizado, palabraCategoria, telefono1,
                        origenSolo, destinoSolo,
                      telefono2, paquete } = datos;

                      horaEntrega = new Date(horaEntrega.toDate());
                      fecha = new Date(fecha.toDate());
                      let posicionSol = ''
               
                      if(horaEntrega.getHours() >= 12){
                          posicionSol = ' P.M'
                      }
                      if(horaEntrega.getHours() < 12){
                       posicionSol = ' A.M'
                      }
                     
               
                      horaEntrega = horaEntrega.getHours() + ':'+ horaEntrega.getMinutes()+posicionSol;
               
                      fecha = fecha.getMonth()+'/'+fecha.getDay()+'/'+ fecha.getFullYear();
               
                      if(palabraCategoria === 'Almacenamiento'){
               
                      urlPdf= `https://mudanzasganapdf.000webhostapp.com/pdforden.php?arr[]=Jalisco&arr[]=Jal&arr[]=${paquete}&arr[]=${espacioCantidad}&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${telefono1}&arr[]=${telefono2}&arr[]=${'AV. DE JESUS 1260H COL. VALLE DE LA MISERICORDIA C.P. 45615 TLAQUEPAQUE, JAL.'.replace(' ','_')}&arr[]=${datos.viajeRecoleccion.direccionMapsRecoleccion.replace(' ','_')}&arr[]=${fecha}&arr[]=${costo}&arr[]=${pagoRealizado === 'true' ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=${horaEntrega}&arr[]=${ordenId}`
               
                      arrayOrden.map((dato)=>(
                        urlPdf+=`&inv[]=${dato.cantidad}&inv[]=${dato.bien}`
                       ))

                      }else if(palabraCategoria === 'Transporte a nuestro almacen'){
               
                      urlPdf= `https://mudanzasganapdf.000webhostapp.com/pdforden.php?arr[]=Cliente&arr[]=Jalisco&arr[]=${paquete}&arr[]=${espacioCantidad}&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${telefono1}&arr[]=${telefono2}&arr[]=El cliente eligio llevar sus pertenencias&arr[]=${'AV. DE JESUS 1260H COL. VALLE DE LA MISERICORDIA C.P. 45615 TLAQUEPAQUE, JAL.'.replace(' ','_')}&arr[]=${fecha}&arr[]=${costo}&arr[]=${pagoRealizado === 'true' ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=${horaEntrega}&arr[]=${ordenId}`

                      arrayOrden.map((dato)=>(
                        urlPdf+=`&inv[]=${dato.cantidad}&inv[]=${dato.bien}`
                       )) 
                      }else if(palabraCategoria === 'Traslado de autos'){
                       
                        urlPdf= `https://mudanzasganapdf.000webhostapp.com/carpdf.php?arr[]=${origenSolo}&arr[]=${destinoSolo}&arr[]=Traslado_de_autos&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${telefono1}&arr[]=45646&arr[]=${datos.viajeOrigen.direccionMapsOrigen.replace(' ','_')}&arr[]=${datos.viajeDestino.direccionMapsDestino.replace(' ','_')}&arr[]=${fecha}&arr[]=Fusion&arr[]=Ford&arr[]=2010&arr[]=6&arr[]=${costo}&arr[]=${pagoRealizado === true ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=${ordenId}`

                      }else{
               
                       urlPdf= `https://mudanzasganapdf.000webhostapp.com/pdforden.php?arr[]=${origenSolo}&arr[]=${destinoSolo}&arr[]=${paquete}&arr[]=${espacioCantidad}&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${telefono1}&arr[]=${telefono2}&arr[]=${ datos.viajeOrigen.direccionMapsOrigen.replace(' ','_')}&arr[]=${ datos.viajeDestino.direccionMapsDestino.replace(' ','_')}&arr[]=${fecha}&arr[]=${costo}&arr[]=${pagoRealizado === 'true' ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=${horaEntrega}&arr[]=${ordenId}`
                       arrayOrden.map((dato)=>(
                        urlPdf+=`&inv[]=${dato.cantidad}&inv[]=${dato.bien}`
                       ))
               
                      }
                     
               
                      //  urlPdfCarros = `https://mudanzasganapdf.000webhostapp.com/carpdf.php?arr[]=${origenSolo}&arr[]=${destinoSolo}&arr[]=Traslado_de_autos&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${numeroTelefonico}&arr[]=45646&arr[]=${viajeOrigen.replace(' ','_')}&arr[]=${viajeDestino.replace(' ','_')}&arr[]=${fechaPedido}&arr[]=Fusion&arr[]=Ford&arr[]=2010&arr[]=6&arr[]=${costo}&arr[]=${pagarMomento === true ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=${ordenId}`;
                      
 
                //  let urlPdf = `https://mudanzasganapdf.000webhostapp.com/pdforden.php?arr[]=${origenSolo}&arr[]=${destinoSolo}&arr[]=${paquete}&arr[]=${espacioCantidad}&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${numeroTelefonico}&arr[]=${numeroTelefonico2}&arr[]=${ viajeOrigen.replace(' ','_')}&arr[]=${ viajeDestino.replace(' ','_')}&arr[]=11_12_20&arr[]=${costo}&arr[]=${pagarMomento === true ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=6_20pm&arr[]=${ordenId}`
                  
                //  console.log(doc.data());
                //  let {} = doc.data();
                 // let urlPdf = `https://mudanzasganapdf.000webhostapp.com/pdforden.php?arr[]=${resultado2}&arr[]=${resultado4}&arr[]='Completo'&arr[]=${espacioCantidad}&arr[]=${nombre.replace(' ','_')}&arr[]=${apellidos.replace(' ','_')}&arr[]=${telefono1}&arr[]=${telefono2}&arr[]=${ direccionMapsOrigen.replace(' ','_')}&arr[]=${ direccionMapsDestino.replace(' ','_')}&arr[]=11_12_20&arr[]=${costo}&arr[]=${pagoRealizado === true ? costo : 'No Pagado'}&arr[]=${costo}&arr[]=6_20pm&arr[]=${ordenId}`
                  

               window.open(urlPdf);

                   
                })
        
        
              });
            })()
            
          
          }
        },
        {  
          icon: MonetizationOnIcon,
          tooltip: 'Cambiar Estado',
          onClick: (event, rowData) =>{
            if(rowData.estado === 34){
              Swal.fire({
                title: '¿Estas seguro que quieres marcar esta orden como NO pagada?',
                text: "Una vez hecho, los cambios se reflejaran en el dashboard",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, marcar como NO PAGADA'
              }).then((result) => {
                if (result.isConfirmed) {
                  estadoPagadoFirebase(rowData.name, 'no pagado', rowData.pago);
                  Swal.fire(
                    'Cambio Exitoso',
                    'La orden ah sido cambiada a NO PAGADA',
                    'success'
                  )
                }
              })
            }

            if(rowData.estado === 63){
              Swal.fire({
                title: '¿Estas seguro que quieres marcar esta orden como pagada?',
                text: "Una vez hecho, los cambios se reflejaran en el dashboard",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, marcar como PAGADA',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {
                  estadoPagadoFirebase(rowData.name,'pagado', rowData.pago);
                  Swal.fire(
                    'Cambio Exitoso',
                    'La orden ah sido cambiada a PAGADA',
                    'success'
                  )
                }
              })
            }
          }
        }
        ,
        {  
          icon: MoneyIcon,
          tooltip: 'Modificar Precio',
          onClick: (event, rowData) =>{
            if(rowData.estado === 34){
              Swal.fire({
                title: 'Error',
                text: "Solo puedes cambiar el precio si la orden no esta pagada",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok'
              })
            }

            if(rowData.estado === 63){
              Swal.fire({
                title: 'Introduce el nuevo precio',
                text: "Una vez hecho, los cambios se reflejaran en el dashboard",
                icon: 'warning',
                showCancelButton: true,
                input: 'number',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Modificar Precio',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {
                  modificarPrecioFirebase(rowData.name, result.value);
                  Swal.fire(
                    'Cambio Exitoso',
                    'El precio ah sido modificado',
                    'success'
                  )
                }
              })
            }
          }
        }
      ]}
      
      columns={state.columns}
      data={state.data}
      editable={{
       
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                 db.collection('ordenes').where('ordenId','==', oldData.name).get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                      db.collection('ordenes').doc(doc.id).delete().then(()=>{
                      })
                  });
                   
                 })
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}

      
    />
  );
}