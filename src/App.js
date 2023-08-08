import './App.css';
import React, { useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Homepage from "./components/Homepage"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App;



