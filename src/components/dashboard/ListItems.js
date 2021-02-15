import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/Inbox';
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


export default function ListItems({open, triggerCarga, setTriggerCarga, usuario}){
  const classes = useStyles();
    let history = useHistory();
     

    

    return(
    
  <div>
    <Fade in={open}>
      <Avatar  className={classes.large} src={
        usuario === 'garfias15332000@gmail.com' ?
        peter :
        usuario === 'garfiasnavarrete1@gmail.com' ?
        '' :
        usuario === 'licdiana.sizzo@gmail.com' ?
        '' 
      :''} />
      </Fade>
      <Fade in={open}>
      <Typography component="div">
      <Box textAlign="center" fontSize={12} m={1} style={{marginBottom:20}}>
    {usuario === 'garfias15332000@gmail.com'  ?
    'Juan Carlos Garfias' :
    usuario === 'garfiasnavarrete1@gmail.com'  ?
    'Jesus Garfias Navarrete' :
    usuario === 'licdiana.sizzo@gmail.com'  ? 
    'Diana' :

    ''

    }
      </Box>
      </Typography>
      </Fade>
       
    <Tooltip title="M. Helado Duro" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/maquinas-de-helado-duro');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="M. Helado Duro"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="M. Helado Suaves" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/maquinas-de-helado-suave');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="M. Helado Suave"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Maquinas Paleteras" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/maquinas-paleteras');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Maquinas Paleteras"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Otros y accesorios" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/otros-y-accesorios');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Otros y accesorios"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Bases para helado" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/bases-para-helado');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Bases para helado"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Slider" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/slider');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Slider"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Recetas" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/recetas');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Recetas"  />
    </ListItem>
    </Tooltip>
   
   


    
  
  </div>
    );
};

