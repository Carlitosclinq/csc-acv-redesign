import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MyCSC from './pages/MyCSC';
import Unemployment from './pages/Unemployment';
import Membership from './pages/Membership';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-csc" element={<MyCSC />} />
            <Route path="/unemployment" element={<Unemployment />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;