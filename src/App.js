import './App.css';
import Header from './pages/header/header';
import Home from './pages/home/home';
import Navigation from './pages/navigation/navigation';
import { useState } from 'react';
function App() {

  return (
    <>
    <Header />
     <main>
     <Home/>
    </main>
    </>
 
  );
}

export default App;
