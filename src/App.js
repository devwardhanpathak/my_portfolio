import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing.jsx'
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {
  return (
    <Route>
      <Landing />
    </Route>
  );
}

export default App;
