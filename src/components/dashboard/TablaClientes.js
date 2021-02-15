import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import ModalDatos from './ModalDatos';
import { tableIcons } from './TableIcons';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';
import helado from '../../helado.jpg';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyIcon from '@material-ui/icons/Money';
import EditIcon from '@material-ui/icons/Edit';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';  //traduce al español
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';

import 'firebase/firestore';
const db = firebaseApp.firestore(firebaseApp);

export default function MaterialTableDemo({palabra, triggerCarga, setTriggerCarga, categoria}) {

  const [abrirModal, setAbrirModal] = useState(false);
   let [palabraModal, setPalabraModal] = useState('subirDatos');
   const [queryActualizar, setQueryActualizar] = useState('');

  let [multipleObject, setMultipleObject] = useState(
    {
        descripcion: '',
        contenido: '',
        fotoPrincipalSlider: '',
        fotoPrincipalRecetas: '',
        fotoSecundariaRecetas: '' ,
        titulo: '',
        titulo2: '',
        titulo3: '',
        pdfLink: '',
        arrayFicha: [],
        precio: 0,
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        uploadProgress: 0,
        filenamesSingle: '',
        downloadURLsSingle: '',
        categoria: categoria,
        fecha: Date.now()
      }
);

  const [state, setState] = React.useState({
    columns: [
      {title: 'Imagen', field: 'imagen'},
      { title: 'Titulo', field: 'titulo' },
      {title: 'Fecha Publicacion', field: 'fecha'},
      { title: 'Estado', field: 'estado',  lookup: { 34: <p style={{margin:0, color:'limegreen'}}>{'ACTIVO'}</p>, 63: <p style={{margin:0, color:'red'}}>{'NO ACTIVO'}</p> }},
      
    ],
    data: []
    
    
  
  });

  const traerDatosModificables = async (titulo)=>{

    if(palabra === 'recetas'){

      await db.collection('recetasIngles').where('titulo','==', titulo).get().then(datos=>{
        datos.forEach((doc)=>{

          setMultipleObject({...multipleObject,
           ['downloadURLsSingle']: doc.data().fotoPrincipal,
           ['fotoSecundariaRecetas']: doc.data().fotoSecundariaRecetas,
           ['titulo']: doc.data().titulo,
           ['descripcion']: doc.data().descripcion,

         })
        });
        setQueryActualizar(titulo);
         setPalabraModal('actualizar');
        setAbrirModal(true);

        
   })

    }

    if(palabra === 'slider'){

      await db.collection('slider').where('titulo','==', titulo).get().then(datos=>{
        datos.forEach((doc)=>{

          setMultipleObject({...multipleObject,
           ['downloadURLsSingle']: doc.data().fotoPrincipal,
           ['titulo']: doc.data().titulo,
           ['titulo2']: doc.data().titulo2,
           ['titulo3']: doc.data().titulo3,
         })
        });
        setQueryActualizar(titulo);
         setPalabraModal('actualizar');
        setAbrirModal(true);

        
   })

    }

    if(palabra !== 'slider' && palabra !== 'recetas'){
        
      await db.collection('productosIngles').where('titulo','==', titulo).get().then(datos=>{
        datos.forEach((doc)=>{

          setMultipleObject({...multipleObject,
           ['downloadURLsSingle']: doc.data().fotoPrincipal,
           ['titulo']: doc.data().titulo,
           ['descripcion']: doc.data().descripcion,
           ['precio']: doc.data().precio,
           ['downloadURLs']: doc.data().arrayFotos,
           ['arrayFicha']: doc.data().arrayFicha,
           ['pdfLink']: doc.data().pdfLink

         })
        });
        setQueryActualizar(titulo);
         setPalabraModal('actualizar');
        setAbrirModal(true);

        
   })


    }

   
  }

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
    console.log(categoria);
    let datosClientesNuevosFirebase = [];
    let datosClientesNuevosMaster = [];


     const traerDatosProductos = async ()=>{

      await db.collection('productosIngles').where('url','==', palabra).get().then(datos=>{
             
        datos.forEach(doc=>{
          datosClientesNuevosFirebase.push(doc.data());
        })
      }).catch((e)=>{
        console.log(e);
      })

      datosClientesNuevosFirebase.map((data, index)=>(
        datosClientesNuevosMaster.push({
          imagen: <Avatar style={{width:100, height:100}}><img src={data.fotoPrincipal} style={{width:100, height:100}}></img></Avatar>,
          titulo: data.titulo,
          fecha: formatDistanceToNow(new Date(data.creado), {locale: es}),
          estado: data.productoActivo === true ? 34 : 63
        })
      ))

      setState(
        {
          ...state,
          ['data']: datosClientesNuevosMaster
        }
      );

     }

     const traerDatosSlider = async()=>{

      await db.collection('slider').get().then(datos=>{
             
        datos.forEach(doc=>{
          datosClientesNuevosFirebase.push(doc.data());
        })
      }).catch((e)=>{
        console.log(e);
      })

      datosClientesNuevosFirebase.map((data, index)=>(
        datosClientesNuevosMaster.push({
          imagen: <Avatar style={{width:100, height:100}}><img src={data.fotoPrincipal} style={{width:100, height:100}}></img></Avatar>,
          titulo: data.titulo,
          fecha: formatDistanceToNow(new Date(data.creado), {locale: es}),
          estado: data.productoActivo === true ? 34 : 63
        })
      ))

      setState(
        {
          ...state,
          ['data']: datosClientesNuevosMaster
        }
      );


     }

     const traerDatosRecetas = async ()=>{

      await db.collection('recetas').get().then(datos=>{
             
        datos.forEach(doc=>{
          datosClientesNuevosFirebase.push(doc.data());
        })
      }).catch((e)=>{
        console.log(e);
      })

      datosClientesNuevosFirebase.map((data, index)=>(
        datosClientesNuevosMaster.push({
          imagen: <Avatar style={{width:100, height:100}}><img src={data.fotoPrincipal} style={{width:100, height:100}}></img></Avatar>,
          titulo: data.titulo,
          fecha: formatDistanceToNow(new Date(data.creado), {locale: es}),
          estado: data.productoActivo === true ? 34 : 63
        })
      ))

      setState(
        {
          ...state,
          ['data']: datosClientesNuevosMaster
        }
      );

     }

     if(palabra === 'slider'){
          traerDatosSlider();
     }

     if(palabra === 'recetas'){
          traerDatosRecetas();
     }

     if(palabra !== 'recetas' && palabra !== 'slider'){
           traerDatosProductos();
             
     }


    


  },[triggerCarga])
     
  

  return (
    <>
    <MaterialTable
      title={
      <Button variant="contained" color="primary" 
       style={{background:'#ffa323', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
       onClick={()=> {
         setMultipleObject(
          {
            descripcion: '',
            contenido: '',
            fotoPrincipalSlider: '',
            fotoPrincipalRecetas: '',
            fotoSecundariaRecetas: '' ,
            arrayFicha:[],
            titulo: '',
            titulo2: '',
            titulo3: '',
            precio: 0,
            filenames: [],
            downloadURLs: [],
            isUploading: false,
            uploadProgress: 0,
            filenamesSingle: '',
            downloadURLsSingle: '',
            categoria: categoria,
            fecha: Date.now(),
            pdfLink: ''
          }
         )
         setPalabraModal('subirDatos');
        setAbrirModal(true)
      
      }}
      
      >
      Subir Producto
    </Button>
    }
      icons={tableIcons}
      actions={[
       
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
          icon: EditIcon,
          tooltip: 'Modificar datos',
          onClick: (event, rowData)=>{
            console.log(rowData);
              traerDatosModificables(rowData.titulo);
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

                if(palabra === 'recetas'){

                  db.collection('recetas').where('titulo','==', oldData.titulo).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        db.collection('recetas').doc(doc.id).delete().then(()=>{
                        })
                    });
                     
                   })

                }

                if(palabra === 'slider'){

                  db.collection('slider').where('titulo','==', oldData.titulo).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        db.collection('slider').doc(doc.id).delete().then(()=>{
                        })
                    });
                     
                   })

                }

                if(palabra !== 'slider' && palabra !== 'recetas'){

                  db.collection('productosIngles').where('titulo','==', oldData.titulo).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        db.collection('productosIngles').doc(doc.id).delete().then(()=>{
                        })
                    });
                     
                   })

                }
                
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}

      
    />
    <ModalDatos 
    abrirModal={abrirModal} 
    setAbrirModal={setAbrirModal} 
    categoria={categoria} 
    palabra={palabra}
    multipleObject={multipleObject}
    setMultipleObject={setMultipleObject}
    palabraModal={palabraModal}
    queryActualizar={queryActualizar}
    setTriggerCarga={setTriggerCarga}
    triggerCarga={triggerCarga}
    />
    </>
  );
}