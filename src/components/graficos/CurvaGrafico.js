import React from 'react';
import {Line} from 'react-chartjs-2';



const CurvaGrafico = ({dataMaster, etiqueta}) => {

    
const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Septiembre','Noviembre', 'Diciembre'],
  datasets: [
    {
      label: etiqueta,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataMaster
    }
  ]
};
    return (
        
        <Line data={data} width={20}
        height={400}
        options={{
            maintainAspectRatio: false
          }}
        />
   
      );
}
 
export default CurvaGrafico;