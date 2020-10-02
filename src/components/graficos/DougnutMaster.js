import React from 'react';
import {Doughnut} from 'react-chartjs-2';




const  DougnutMaster= ({dataMaster}) => {

    const data = {
        labels: [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Septiembre','Noviembre', 'Diciembre'
        ],
        datasets: [{
            data: dataMaster,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF5733',
            '#56DC40',
            '#DC4097',
            '#29D7F1',
            '#69E92B',
            '#F21EC8',
            '#F21E51',
            '#F2B81E',
            '#A9CD78'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF5733',
                '#56DC40',
                '#DC4097',
                '#29D7F1',
                '#69E92B',
                '#F21EC8',
                '#F21E51',
                '#F2B81E',
                '#A9CD78'
            
            ]
        }]
    };
    
    return (
        
        <Doughnut data={data}
        width={20}
        height={400}
        options={{
            maintainAspectRatio: false
          }} />
     
      );
}
 
export default DougnutMaster;