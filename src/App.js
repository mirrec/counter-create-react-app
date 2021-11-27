import React, { useState } from 'react';
import './App.css';
import SimpleCounter from './components/SimpleCounter'
import MultiCounter from './components/MultiCounter'

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <hr />
      <MultiCounter />
    </div>
  );
}

export default App;
