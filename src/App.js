import React from 'react';
import './App.css';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

/**
 * Renders navigation and routes components
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
