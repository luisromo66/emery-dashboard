import React from 'react';
import InicioLogin from './components/InicioLogin';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/' component={InicioLogin}/>
      <Route exact path='/dashboard' render={(props)=> <Dashboard {...props} palabra='dashboard'/>}/>
      <Route exact path='/dashboard/maquinas-de-helado-duro' render={(props)=> <Dashboard {...props} palabra='maquinas-de-helado-duro'/>}/>
      <Route exact path='/dashboard/maquinas-de-helado-suave' render={(props)=> <Dashboard {...props} palabra='maquinas-de-helado-suave'/>}/>
      <Route exact path='/dashboard/maquinas-paleteras' render={(props)=> <Dashboard {...props} palabra='maquinas-paleteras'/>}/>
      <Route exact path='/dashboard/bases-para-helado' render={(props)=> <Dashboard {...props} palabra='bases-para-helado'/>}/>
      <Route exact path='/dashboard/otros-y-accesorios' render={(props)=> <Dashboard {...props} palabra='otros-y-accesorios'/>}/>
      <Route exact path='/dashboard/slider' render={(props)=> <Dashboard {...props} palabra='slider'/>}/>
      <Route exact path='/dashboard/recetas' render={(props)=> <Dashboard {...props} palabra='recetas'/>}/>

      
    </Switch>
  </Router>
  );
}

export default App;
