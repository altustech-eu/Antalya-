import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';
import Searchpage from './components/pages/Searchpage';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
         <Route path="/searchpage" element={<Searchpage/>} />
              </Routes>
              <Footer />
    </Router>
  );
}

export default App;
