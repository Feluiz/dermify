import React from 'react';
import Header from './Components/Header/Header';
import MainShowcase from './Components/MainShowcase/MainShowcase';
import Catalog from './Components/Catalog/Catalog';

import './App.css';

function App() {

  return (
    <div className='full-body'>
      <Header />
      <MainShowcase />
      <Catalog />
    </div>
  );
}

export default App;
