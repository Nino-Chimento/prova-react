import React from 'react';
import Navbar from "./components/Navbar";

import './App.css';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Counters />
      </main>
    </React.Fragment>
    
  );
}

export default App;
