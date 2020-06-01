import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      < Navbar/>
      < Home/>
    </Router>
  );
}

export default App;

