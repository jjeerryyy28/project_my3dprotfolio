import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner'; 
import { Skills } from './component/Skills'; 
import { Projects } from './component/Projects'; 
import { Contacts } from './component/Contacts';
import { Footer } from './component/Footer';
import { About } from './component/AboutMe'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <Contacts />
            <Footer />
          </>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
