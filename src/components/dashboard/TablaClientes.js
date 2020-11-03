import React from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from './TableIcons';
import PrintIcon from '@material-ui/icons/Print';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: '#Folio', field: 'name' },
      {title: 'Fecha', field: 'fecha'},
      { title: 'Nombre del cliente', field: 'surname' },
      { title: 'Ejemplo', field: 'birthYear'},
      {title: 'Pago', field: 'pago',  }
      
    ],
    data: JSON.parse(localStorage.getItem('arrayHoy')) !== null? JSON.parse(localStorage.getItem('arrayHoy')).map((dato,index)=>(
      {name: dato.folio, surname: dato.nombre, birthYear: dato.llantas, fecha: dato.fecha, pago: dato.total, kikiribu:dato.datosImpresion }
    )) : []
    
    
   
  });
     
  

  return (
    <MaterialTable
      title=""
      icons={tableIcons}
      actions={[
        {
          icon: PrintIcon,
          tooltip: 'Imprimir Comprobante',
          onClick: (event, rowData) =>{
            console.log(rowData);
            localStorage.setItem('folio', rowData.name);
            localStorage.setItem('datosimpresion', JSON.stringify(rowData.kikiribu[0]));
            localStorage.setItem('nombrecliente', rowData.surname);
            localStorage.setItem('totalpagar', rowData.pago);
          
           window.open('/dashboard/crear-recibo/imprimir')
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