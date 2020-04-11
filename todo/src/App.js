import React from 'react';
import ToDo from '../src/components/ToDo'
import CreateItem from '../src/components/CreateItem'

import './App.css';

function App() {
  return (
    <div className="App">
    <CreateItem/>
    <ToDo/>
    </div>
  );
}

export default App;
