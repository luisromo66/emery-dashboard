import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
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
    


    


 


    
  
    <Tooltip title="Todas" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/todas');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Todas"  />
    </ListItem>
    </Tooltip>

    <Tooltip title="Pendientes" placement="right" disableHoverListener={open}>
    <ListItem button onClick={()=>{
          history.push('/dashboard/pendientes');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Pendientes"  />
    </ListItem>
    </Tooltip>

  

    

    <Tooltip title="Contratadas" placement="right" disableHoverListener={open} >
    <ListItem button onClick={()=>{
          history.push('/dashboard/contratadas');
          setTriggerCarga(!triggerCarga);
      }} >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Contratadas"  />
    </ListItem>
    </Tooltip>

   
   


    
  
  </div>
    );
};

