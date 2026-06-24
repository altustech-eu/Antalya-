import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';
import Searchpage from './components/pages/Searchpage';
import Jdpage from './components/pages/JDpage';
import Footer from './components/pages/Footer';
import Floating from './components/pages/floatingSM';
import Nav from './components/Homepage/Navigation'; 

function App() {
  return (
    <Router>
       <Nav />
     <Floating />
    

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
         <Route path="/searchpage" element={<Searchpage/>} />
         <Route path="/jdpage" element={<Jdpage/>} />
              </Routes>
              <Footer />
    </Router>
  );
}

export default App;
