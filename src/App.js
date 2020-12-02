import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact} />
    </Switch>
  );
}

export default App;
