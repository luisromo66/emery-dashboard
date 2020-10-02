import React from 'react';
import InicioLogin from './components/InicioLogin';
import Dashboard from './components/dashboard/Dashboard';
import LlantasState from './context/llantasState';
import CrearRecibo from './components/dashboard/CrearRecibo';
import Imprimir from './components/dashboard/Imprimir';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <LlantasState>
  <Router>
    <Switch>
      <Route exact path='/' component={InicioLogin}/>
      <Route exact path='/' component={InicioLogin}/>
      <Route exact path='/dashboard' render={(props)=> <Dashboard {...props} palabra='dashboard'/>}/>
      <Route exact path='/dashboard/estadisticas' render={(props)=> <Dashboard {...props} palabra='estadisticas'/>}/>
      <Route exact path='/dashboard/clientes' render={(props)=> <Dashboard {...props} palabra='clientes'/>}/>
      <Route exact path='/dashboard/crear-recibo' render={(props)=> <Dashboard {...props} palabra='recibo'/>}/>
      <Route exact path='/dashboard/crear-recibo/imprimir' component={Imprimir}/>
      <Route exact path='/dashboard/kiki' component={CrearRecibo}/>
    </Switch>
  </Router>
  </LlantasState>
  );
}

export default App;
