import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DatosTecnicos from './DatosTecnicos';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DialogTitle from '@material-ui/core/DialogTitle';
import MultiplesImagenes from './MultiplesImagenes';
import {firebaseApp} from '../FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import DatosTecnicosFirebase from './DatosTecnicosFirebase';
import DatosTecnicosSolo from './DatosTecnicosSolo';

const db = firebaseApp.firestore(firebaseApp);

export default function ModalDatos({abrirModal,
  setAbrirModal, categoria, palabra, multipleObject, 
  setMultipleObject, palabraModal, queryActualizar, triggerCarga, setTriggerCarga}) {

           

          const subirDatosFirebase = async ()=>{



            const {downloadURLsSingle, fecha, arrayFotos, downloadURLs, 
              precio,descripcion,titulo, fotoPrincipalRecetas, fotoSecundariaRecetas,
               contenido,titulo2, titulo3, arrayFicha, pdfLink
            } = multipleObject;

            if(downloadURLs.length > 0 
               && downloadURLsSingle !== ''
               && precio !== 0 && titulo !== ''
               && descripcion !== ''  ||
               titulo !== '' && titulo2 !== '' && titulo3 !== '' && downloadURLsSingle !== '' ||
               titulo !== '' && descripcion !== '' && fotoSecundariaRecetas !== '' && downloadURLsSingle !== ''
               ){

                if(palabraModal === 'actualizar'){

                   if(palabra === 'slider'){
                        
                    await db.collection('slider').where('titulo','==', queryActualizar).get().then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          db.collection('slider').doc(doc.id).update({
  
                    fotoPrincipal: downloadURLsSingle,
                    titulo: titulo,
                    titulo2: titulo2,
                    titulo3: titulo3,
  
                          }).then(()=>{
                            setTriggerCarga(!triggerCarga);
                            setAbrirModal(false);
                
                        })
                
                
                      });
                
                  });
                    
                    

                   }

                   if(palabra === 'recetas'){

                    
                    await db.collection('recetasIngles').where('titulo','==', queryActualizar).get().then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          db.collection('recetasIngles').doc(doc.id).update({
  
                    fotoPrincipal: downloadURLsSingle,
                    fotoSecundariaRecetas: fotoSecundariaRecetas,
                    titulo: titulo,
                    descripcion: descripcion,
  
                          }).then(()=>{
                            setTriggerCarga(!triggerCarga);
                            setAbrirModal(false);
                
                        })
                
                
                      });
                
                  });

                  }

                  if(palabra !== 'slider' && palabra !== 'recetas'){

                    await db.collection('productosIngles').where('titulo','==', queryActualizar).get().then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          db.collection('productosIngles').doc(doc.id).update({
  
                    fotoPrincipal: downloadURLsSingle,
                    arrayFotos: downloadURLs,
                    categoria: categoria,
                    precio: parseInt(precio).toFixed(2),
                    titulo: titulo,
                    descripcion: descripcion,
                    arrayFicha: arrayFicha, 
                    pdfLink: pdfLink
  
                          }).then(()=>{
                            setTriggerCarga(!triggerCarga);
                            setAbrirModal(false);
                
                        })
                
                
                      });
                
                  });
                  }

                  }
                

                if(palabraModal == 'subirDatos'){

                  if(palabra === 'slider'){
                    await db.collection('slider').add({

                       fotoPrincipal: downloadURLsSingle,
                       creado: fecha,
                       categoria: categoria,
                       productoActivo: true,
                       titulo: titulo,
                       titulo2: titulo2,
                       titulo3: titulo3,
                       contenido: contenido,
                       url: palabra,
                       
         
                     })
                     setTriggerCarga(!triggerCarga);
                    

                  }

                  if(palabra === 'recetas'){

                    await db.collection('recetasIngles').add({

                     fotoPrincipal: downloadURLsSingle,
                      fotoSecundariaRecetas: fotoSecundariaRecetas,
                      creado: fecha,
                      descripcion: descripcion,
                      categoria: categoria,
                      productoActivo: true,
                      titulo: titulo,
                      contenido: descripcion,
                      url: palabra
        
                    })
                    setTriggerCarga(!triggerCarga);

                  }

                  if(palabra !== 'recetas' && palabra !== 'slider'){

                    await db.collection('productosIngles').add({

                      fotoPrincipal: downloadURLsSingle,
                      creado: fecha,
                      arrayFotos: downloadURLs,
                      categoria: categoria,
                      productoActivo: true,
                      precio: parseInt(precio).toFixed(2),
                      titulo: titulo,
                      descripcion: descripcion,
                      url: palabra,
                      arrayFicha: arrayFicha,
                      pdfLink: pdfLink
        
                    })
                    setTriggerCarga(!triggerCarga);

                  }

               
              
                setAbrirModal(false);
                setMultipleObject(
                  {
                    descripcion: '',
                    titulo: '',
                    precio: 0,
                    filenames: [],
                    downloadURLs: [],
                    isUploading: false,
                    uploadProgress: 0,
                    filenamesSingle: '',
                    downloadURLsSingle: '',
                    categoria: categoria,
                    fecha: Date.now(),
                    contenido: '',
                    fotoPrincipalSlider: '',
                    fotoPrincipalRecetas: '',
                    fotoSecundariaRecetas: '' ,
                    arrayFicha: []
                  }
                )

                }

               }else{

                console.log('Complete todo mi perro');
               }

           
               
          }

         const onChange = (e)=>{
           setMultipleObject({
             ...multipleObject,
             [e.target.name]: e.target.value
           })
         }


  return (
    <>
     
      <Dialog
        open={abrirModal}
        style={{overflowY:'hidden'}} 
        onClose={()=>setAbrirModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{
        palabra === 'slider' ? 'Nueva imagen para el slider' : 
        palabra === 'receta' ? 'Nueva receta' : 
        "Nuevo Producto"}</DialogTitle>
        <DialogContent >
         <Grid container spacing={3}  >
         <Grid item xs={12}>
        <TextField id="outlined-basic" label="Titulo" variant="outlined" style={{width:500}}
        defaultValue={multipleObject.titulo}
        onChange={onChange}
        name='titulo'/>
        </Grid>
        {palabra !== 'slider' && palabra !== 'recetas' &&
        <>
        <Grid item xs={12}>
          <h4 style={{margin:0}}>Ficha Tecnica</h4>
         </Grid>


         {palabraModal === 'actualizar' ?

         <>

<DatosTecnicosSolo setMultipleObject={setMultipleObject} multipleObject={multipleObject} />

           { multipleObject.arrayFicha.map((dato, i)=>(
              <DatosTecnicosFirebase setMultipleObject={setMultipleObject}  multipleObject={multipleObject} dato={dato} i={i}/>

            ))
           }
           </>
         
        :
         <>
        
        <DatosTecnicos setMultipleObject={setMultipleObject} multipleObject={multipleObject} />
       { multipleObject.arrayFicha.map((dato, i)=>(
          <DatosTecnicos setMultipleObject={setMultipleObject}  multipleObject={multipleObject} i={i}/>

       ))
  }

       </>
        }
         
         </>
         }

        {palabra === 'slider' &&
         <>
            <Grid item xs={12}>
        <TextField id="outlined-basic" label="Titulo 2" variant="outlined" style={{width:500}}
        defaultValue={multipleObject.titulo}
        onChange={onChange}
        name='titulo2'/>
        </Grid>

        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Titulo 3" variant="outlined" style={{width:500}}
        defaultValue={multipleObject.titulo}
        onChange={onChange}
        name='titulo3'/>
        </Grid>
         </>

      
      
      }
       
     {palabra !== 'slider' &&
       <Grid item xs={12}>
       <TextField
         id="outlined-textarea"
         label="Descripcion"
         defaultValue={multipleObject.descripcion}
         multiline
         rows={4}
         variant="outlined"
         style={{width:500}} 
         onChange={onChange}
         name='descripcion'
       />
       </Grid>
     
     }
        
        
        {palabra !== 'slider' && palabra !== 'recetas' &&
        
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Precio" variant="outlined" type='number' 
        style={{width:500}}
        defaultValue={multipleObject.precio}
        onChange={onChange}
        name='precio'
        />
        </Grid>

        }
        
        
        <MultiplesImagenes 
                    multipleObject={multipleObject} 
                    setMultipleObject={setMultipleObject}
                    palabra={palabra}
                    />

       
                    </Grid>


                 



        </DialogContent>
        
        <DialogActions>
          <Button onClick={()=>setAbrirModal(false)} color="primary">
            Cancelar 
          </Button>
          <Button onClick={subirDatosFirebase} color="primary" autoFocus>
          {palabraModal === 'actualizar' ? 'Actualizar Datos'  : 'Subir Datos'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
