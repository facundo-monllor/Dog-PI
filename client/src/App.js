// import style from './App.module.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home';
import CreateDog from './components/CreateDog/CreateDog';
import dogsDetails from './components/DogDetails/DogDetails';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Landing} />  
      <Route path="/" component={NavBar}/>
      </Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/create" component={CreateDog}></Route>
      <Route exact path="/home/:id" component={dogsDetails}></Route>
    </React.Fragment>
  );
}

export default App;
