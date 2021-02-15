import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import FileUploader from "react-firebase-file-uploader";
import {firebaseApp} from '../FireBase';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const MultiplesImagenes = ({multipleObject, setMultipleObject, palabra}) => {
    
     const handleUploadStart = () =>{
        

        setMultipleObject({...multipleObject, 
        ['isUploading']: true,
        ['uploadProgress']:0
        })

    }
    
      const handleProgress = progress =>{
        
        setMultipleObject({...multipleObject, 
          
            ['uploadProgress']:progress
            })
      }
    
      const handleUploadError = error => {
        console.log(error);
        setMultipleObject({...multipleObject, 
          
            ['isUploading']:false
            })

      };
    
     const handleUploadSuccess = async filename => {

         console.log(filename);
        const downloadURL = await firebase.storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()

        setMultipleObject(dart =>({
             ...dart,
            ['filenames']: [...dart.filenames, filename],
            ['downloadURLs']: [...dart.downloadURLs, downloadURL],
            ['isUploading']:false,
            ['uploadProgress']:100,
            }))

      };

      const handleUploadSuccessSingle = async filename => {

         
        const downloadURL = await firebase.storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
         
         
        setMultipleObject(dart =>({
             ...dart,
            ['filenamesSingle']:  filename,
            ['downloadURLsSingle']: downloadURL,
            ['isUploading']:false,
            ['uploadProgress']:100,
            }))

      };

      const handleUploadSuccessPdf = async filename => {

         
        const downloadURL = await firebase.storage()
          .ref("pdf")
          .child(filename)
          .getDownloadURL()
         
         
        setMultipleObject(dart =>({
             ...dart,
            ['filenamesSingle']:  filename,
            ['pdfLink']: downloadURL,
            ['isUploading']:false,
            ['uploadProgress']:100,
            }))

      };

      const handleUploadSuccessSecondary = async filename => {

         
        const downloadURL = await firebase.storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
         
         
        setMultipleObject(dart =>({
             ...dart,
            ['filenamesSingle']:  filename,
            ['fotoSecundariaRecetas']: downloadURL,
            ['isUploading']:false,
            ['uploadProgress']:100,
            }))

      };


    return (

        

        <>
                <Grid item xs={12} style={{marginBottom:20}}>
            {/* PDF */}
     <label style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 4, cursor: 'pointer'}}>
    Selecciona el PDF
            <FileUploader
          accept="pdf/*"
          name="imagen"
          id='imagen'
          hidden
          randomizeFilename
          storageRef={firebase.storage().ref("pdf")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccessPdf}
          onProgress={handleProgress}
        />

        </label>
        </Grid> 
        <Grid item >
            {multipleObject.pdfLink === '' ?

        <>
         <p>No se ah subido PDF</p>
        </>

                :
                <>
            <p>PDF subido con exito</p>
            </>
            }
           
        </Grid> 
       
            <Grid item xs={12} style={{marginBottom:20}}>
            {/* Una sola imagen */}
     <label style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 4, cursor: 'pointer'}}>
    Selecciona la imagen principal
            <FileUploader
          accept="image/*"
          name="imagen"
          id='imagen'
          hidden
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccessSingle}
          onProgress={handleProgress}
        />

        </label>
        </Grid> 
        <Grid item >
            {multipleObject.downloadURLsSingle === '' ?

        <>
        </>

                :
            <Badge badgeContent={'X'} color="primary" 
            style={{cursor: 'pointer'}}
            onClick={()=>{
                setMultipleObject({
                    ...multipleObject,
                    ["downloadURLsSingle"]: ''
                })
            }}
            >
            <img src={multipleObject.downloadURLsSingle} style={{width:150, height:150}}/>
            </Badge>
            }
           
        </Grid>  


         {palabra === 'slider' ?  <> </> :
         
         palabra === 'recetas' ?  
          <>
         <Grid item xs={12} style={{marginBottom:20}}>
            {/* Una sola imagen */}
     <label style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 4, cursor: 'pointer'}}>
    Selecciona la imagen secundaria
            <FileUploader
          accept="image/*"
          name="imagen"
          id='imagen'
          hidden
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccessSecondary}
          onProgress={handleProgress}
        />

        </label>
        </Grid> 
        <Grid item >
            {multipleObject.fotoSecundariaRecetas === '' ?

        <>
        </>

                :
            <Badge badgeContent={'X'} color="primary" 
            style={{cursor: 'pointer'}}
            onClick={()=>{
                setMultipleObject({
                    ...multipleObject,
                    ["fotoSecundariaRecetas"]: ''
                })
            }}
            >
            <img src={multipleObject.fotoSecundariaRecetas} style={{width:150, height:150}}/>
            </Badge>
            }
           
        </Grid> 
        </>
         
         
         :

         <>
          {/* Multiples Imagenes */}
        <Grid item xs={12} style={{marginBottom:20}}>
        <label style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 4, cursor: 'pointer'}}>
        Selecciona las imagenes principales
        <FileUploader
          hidden
          accept="image/*"
          name="image-uploader-multiple"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccess}
          onProgress={handleProgress}
          multiple
        />

        </label>
        </Grid> 
        
          {multipleObject.downloadURLs.map((downloadURL, index) => {
            return (
                <Grid item key={index} >
             <Badge badgeContent={'X'} color="primary" 
             onClick={()=>{
             const nuevoArray = multipleObject.downloadURLs.filter((cita,i)=>(
                 i !== index
             ))

             setMultipleObject({
                 ...multipleObject,
                 ["downloadURLs"]: nuevoArray
             })

             } 
            }
             style={{cursor: 'pointer'}}>
            <img src={downloadURL} style={{width:150, height:150}} />
            </Badge>
            </Grid>  
            
            );
          })}
         
         </>

         
        }
        
           
       
      
        
      </>
      );
}
 
export default MultiplesImagenes;