import React from 'react';
import './App.css';
import AppProvider from './Context/AppProvider';
import Table from './Components/Table';

function App() {
  return (
    <AppProvider>
      <span>Hello, App!</span>
      <Table />
    </AppProvider>
  );
}

export default App;
