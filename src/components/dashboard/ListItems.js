import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InboxIcon from '@material-ui/icons/Inbox';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BarChartIcon from '@material-ui/icons/BarChart';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import peter from '../../peter.jpg';


const useStyles = makeStyles((theme) => ({

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
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
      <Avatar  className={classes.large} src={peter} />
      </Fade>
      <Fade in={open}>
      <Typography component="div">
      <Box textAlign="center" fontSize={12} m={1} style={{marginBottom:20}}>
      Juan Carlos Garfias
      </Box>
      </Typography>
      </Fade>

       
      <Tooltip title="Inicio" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard');
      }} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Inicio'  />
    </ListItem>
    </Tooltip>
    


    


    <Tooltip title="Clientes" placement="right" disableHoverListener={open}>
    <ListItem  button onClick={()=>{ history.push('/dashboard/clientes')}}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem >
    </Tooltip>



    
  
    <Tooltip title="Todas" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Todas"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Pendientes" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Pendientes"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Respondidas" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Respondidas"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="No interesa" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="No interesa"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Contratadas" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Contratadas"  />
    </ListItem>
    </Tooltip>

   
   


    <Tooltip title="Estadisticas" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/estadisticas');
      }} >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Ordenes Manuales"  />
    </ListItem>
    </Tooltip>
  
  </div>
    );
};

