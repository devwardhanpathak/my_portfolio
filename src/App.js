import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing.jsx'
import Header from "./components/Header.jsx";
import './App.css';

function App() {
  return (
    <Route>
      <Header />
    </Route>
  );
}

export default App;
