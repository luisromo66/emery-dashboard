import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import taka from '../../ferny-llantas.jpg';


const useStyles = makeStyles((theme) => ({

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: 170,
    height: 42,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:20
    
    
  },
  
}));


export default function ListItems({open}){
  const classes = useStyles();
    let history = useHistory();

    return(
    
  <div>
    <Fade in={open}>
      <Avatar  className={classes.large} src={taka}  variant="rounded" />
      </Fade>
      <Fade in={open}>
      <Typography component="div">
      <Box textAlign="center" fontSize={12} m={1} style={{marginBottom:20}}>
        Fernando Fernandez
      </Box>
      </Typography>
      </Fade>
    <ListItem button onClick={()=>{
          history.push('/dashboard');
      }} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Inicio'  />
    </ListItem>
    <ListItem button  onClick={()=>{history.push('/dashboard/crear-recibo')}} >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Crear Recibos" />
    </ListItem>
    <ListItem  button onClick={()=>{ history.push('/dashboard/clientes')}}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem >
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estadisticas"  />
    </ListItem>
  
  </div>
    );
};

