import './App.css';
import About from './pages/about/about';
import ConctactUs from './pages/contactUs/conctactUs';
import Home from './pages/home/home';
import Navigation from './pages/navigation/navigation';
import Menu from './pages/menu/Menu';
import { useState } from 'react';
import { Routes , Route } from 'react-router-dom'
import Main from './main';
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/contact-Us' element={<ConctactUs />}/>
      </Route>
     </Routes>
    </>
 
  );
}

export default App;
