import React from 'react';
import './App.css';

import { AppTitle, Loader } from './components/presentations';

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Loader />
    </div>
  );
}

export default App;
