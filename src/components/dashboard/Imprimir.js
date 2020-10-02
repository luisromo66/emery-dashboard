import React,{useEffect, useState} from 'react';
import '../../recibo.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import firebase from 'firebase';

export default function Imprimir() {

    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [sumaPago, setSumaPago] = useState(0);
    const [numeroFolio, setNumeroFolio] = useState(0);
    const [totalLlantas, setTotalLlantas] = useState(0);
    const [fecha, setFecha] = useState(null);
    const [letra, setLetra] = useState(false);

    const reloj = new Date();
    const tiempo = reloj.getHours();
    const hora = reloj.toLocaleTimeString('en-US', { hour12: false, 
      hour: "numeric", 
      minute: "numeric"});
    const minutos = reloj.getMinutes();



   useEffect(() => {

    console.log(hora);
    

    firebase.auth().onAuthStateChanged((userInfo)=>{

      if(userInfo.email === 'ivettemiazoe@gmail.com'){
         setLetra(true);

      }

    })


   setPedido(JSON.parse(localStorage.getItem('datosimpresion')));
   setNombre(localStorage.getItem('nombrecliente'));
   setNumeroFolio(localStorage.getItem('folio'));
   setTotalLlantas(localStorage.getItem('totalLlantas'));
   setSumaPago(localStorage.getItem('totalpagar'));
   setFecha(localStorage.getItem('fecha'));

       
   },[])


    return ( 
        <>
        <div className="cuerpoimpresion">
        <div className="clearfix">
        <div id="logo">
          <div>
    <h1 style={{width:100, marginTop:50, paddingRight:90,marginBottom:0}}> {'Fecha '+'\n '+fecha}</h1>
    <p style={{position: "absolute", marginLeft:27}}>{tiempo <= 11? hora + ' AM' : hora + ' PM' }</p>
    </div>
          <img src={require("../../ferny.png")}/>
          <h1 style={{width:100,marginTop:50, paddingLeft:90   }}>{'   Folio N° '+'\n '+numeroFolio+ (letra === true ?'-A':'')}</h1>
        </div>
        
        
        
         <div style={{display:'flex', justifyContent:'space-between'}}> <h2>Sucursal Arcos de Zapopan</h2><h2>Sucursal Mercado del Mar</h2></div>
          
        <div id="company" className="clearfix">
          <div>Prol. Pino Suarez #349<br /> Mercado del campesino<br /> Col. El vigia<br /> Zapopan,Jal. C.P 45140</div>
          <div><h2 style={{marginTop:10,marginBottom:0}}>Tel. 36339529</h2></div>
          <div><h2 style={{marginTop:0,marginBottom:0}}>Cel. 3318546359<WhatsAppIcon style={{paddingLeft:5}}/></h2></div>
          <div><span style={{fontWeight:'bold', marginRight:24}}>CORREO:</span>fernys58@hotmail.com</div>
          
        </div>
        
        <div id="project" >
         
   
    <div id="company2" className="clearfix" style={{fontSize:'large'}}>
          <div id="company2">Av Torre Molinos #2232<br /> {' '}<br />  Col. Lomas de Zapopan<br /> Zapopan,Jal. C.P 45130</div>
          <div id="company2"><h2 style={{marginTop:10,marginBottom:0}}>Tel. 16521746</h2></div>
          <div id="company2"><h2 style={{marginTop:0,marginBottom:0}}>Cel. 3318546359<WhatsAppIcon style={{paddingLeft:5}}/></h2></div>
          <div><span style={{fontWeight:'bold', marginRight:24}}>NOMBRE:</span>{nombre}</div>
    
          
        </div>
    
    
        </div>
      </div>
      <h1 className="titulo1">Recibo de pago</h1>
      <main>
        <table className="tablaFerny">
          <thead>
            <tr style={{fontWeight:"bold"}}>
              
              <th className="desc">DESCRIPCION DEL PRODUCTO</th>
              <th style={{paddingRight:0}}>P. UNITARIO</th>
              <th style={{paddingRight:0}}>CANTIDAD</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>

              {pedido.map((datos,index) =>(
                  <tr key={index}>
             
              <td className="desc">{datos.surname}</td>
              <td className="unit">{'$'+parseFloat(datos.birthYear).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
              <td className="qty">{datos.name}</td>
              <td className="total">{'$'+parseFloat(datos.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                </tr>

              ))}
              <tr>
              <td colSpan="3">TOTAL A PAGAR:</td>
              <td className="total">{'$'+parseFloat(sumaPago).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
            </tr>
            <tr style={{borderBottom:'1px solid #5D6975'}}>
              <td colSpan="3"># DE LLANTAS:</td>
              <td className="total">{totalLlantas}</td>
            </tr>
            
            
           
            
          
            
          </tbody>
          
        </table>
        <h1 style={{textAlign:'center'}}>Contamos con las mejores marcas a nivel mundial</h1>
        <div id="notices" >
  
              <p>Incluye:<br/><br/>°Instalacion<br/>°Balanceo<br/>°Válvula<br/>°Llenado de Nitrógeno<br/>°Garantia sobre defecto<br/>de fabricacion<br/>{'(No Baches, No Banquetasos) '}</p>
              <div id="logo2">
          <img src={require("../../marcas.jpg")}/>
        </div>
        </div>
        <h1 style={{textAlign:'center'}}>¡Gracias por su preferencia!</h1>
        
      </main>
      </div>
      
      </>

     );
}
