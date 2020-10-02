import React,{useState,useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}



export default function Chart() {
  const theme = useTheme();

  const data = [

    createData('09:00', parseFloat(JSON.parse(localStorage.getItem("9")))),
    createData('10:00', parseFloat(JSON.parse(localStorage.getItem("10")))),
    createData('11:00', parseFloat(JSON.parse(localStorage.getItem("11")))),
    createData('12:00', parseFloat(JSON.parse(localStorage.getItem("12")))),
    createData('13:00', parseFloat(JSON.parse(localStorage.getItem("13")))),
    createData('14:00', parseFloat(JSON.parse(localStorage.getItem("14")))),
    createData('15:00', parseFloat(JSON.parse(localStorage.getItem("15")))),
    createData('16:00', parseFloat(JSON.parse(localStorage.getItem("16")))),
    createData('17:00', parseFloat(JSON.parse(localStorage.getItem("17")))),
    createData('18:00', parseFloat(JSON.parse(localStorage.getItem("18")))),
    createData('19:00', parseFloat(JSON.parse(localStorage.getItem("19")))),
    createData('20:00', parseFloat(JSON.parse(localStorage.getItem("20"))))
  ];



  return (
       <>
      <Title>Hoy</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Ventas ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      </>
  );
}