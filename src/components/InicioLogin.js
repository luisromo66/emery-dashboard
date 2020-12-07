import React,{useState, useEffect, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import logoGana from '../LOGO-GANA-.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app';
import 'firebase/auth';




const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
   
  },
  multilineColor:{
    color:'red'
}
}));

export default function InicioLogin(props) {

    const [comprobadorAlerta, setComprobadorAlerta] = useState('');

    const [usuario,setUsuario] = useState({
        email: '',
        password: ''
    });

    const [open, setOpen] = useState(false);

  const classes = useStyles();

  const iniciarApp = async (e)=>{
      e.preventDefault();

      setOpen(true);

      await firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password).then(()=>{
          props.history.push('/dashboard');
          

      }).catch((e)=>{

        if(e.code === "auth/user-not-found"){
            setComprobadorAlerta('No existe ningun usuario con ese correo');
          }else if(e.code === "auth/invalid-email"){
            setComprobadorAlerta('El correo esta mal escrito');
          }else if(e.code === "auth/wrong-password"){
            setComprobadorAlerta('La contraseña es incorrecta');
  
          }
      })

      setOpen(false);

      

  }

  const onChange = e =>{
      
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    }
    );

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoGana} style={{width:160, height:160}}></img>
        <Typography component="h1" variant="h5" style={{paddingBottom:10 }}>
          Iniciar Sesion
        </Typography>
        {comprobadorAlerta !== '' && <Alert severity="error">{comprobadorAlerta}</Alert>}
        <form className={classes.form} onSubmit={iniciarApp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
           
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange}
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background:'#ffa323', marginTop:20, color: 'white'}}
            className={classes.submit}
          >
            Iniciar Sesion
          </Button>
      
        </form>
      </div>
      <Backdrop className={classes.backdrop} open={open} >
    <CircularProgress color="inherit" />
  </Backdrop>
     
    </Container>
    
  );
}