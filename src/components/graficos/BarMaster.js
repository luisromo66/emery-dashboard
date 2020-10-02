import React from 'react';
import {Bar} from 'react-chartjs-2';



export default function BarMaster({dataMaster,etiqueta}){

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Septiembre','Noviembre', 'Diciembre'],
    datasets: [
      {
        label: etiqueta,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: dataMaster
      }
    ]
  };
    

    return (
     <>
     
      
      <Bar
          data={data}
          width={20}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
      
      </>
      
    );
  }
