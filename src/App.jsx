import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MaCSC from './pages/MaCSC';
import Chomage from './pages/Chomage';
import Affiliation from './pages/Affiliation';
import Travailleurs from './pages/Travailleurs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ma-csc" element={<MaCSC />} />
            <Route path="/chomage" element={<Chomage />} />
            <Route path="/affiliation" element={<Affiliation />} />
            <Route path="/travailleurs" element={<Travailleurs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;