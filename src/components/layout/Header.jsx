import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../shared/LanguageSwitcher';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/api/placeholder/50/50" alt="Logo CSC-ACV" className="h-12" />
            </Link>
            <span className="text-xl font-bold hidden md:inline">CSC | ACV</span>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/ma-csc" 
              className="flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
            >
              Mon espace
            </Link>
            <Link to="/travailleurs" className="hover:text-green-200">Travailleurs</Link>
            <Link to="/chomage" className="hover:text-green-200">Chômage</Link>
            <Link to="/affiliation" className="hover:text-green-200">S'affilier</Link>
            <LanguageSwitcher />
          </nav>

          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-green-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-4 space-y-2 md:hidden">
            <Link to="/ma-csc" className="block px-4 py-2 hover:bg-green-700 rounded-lg">Mon espace</Link>
            <Link to="/travailleurs" className="block px-4 py-2 hover:bg-green-700 rounded-lg">Travailleurs</Link>
            <Link to="/chomage" className="block px-4 py-2 hover:bg-green-700 rounded-lg">Chômage</Link>
            <Link to="/affiliation" className="block px-4 py-2 hover:bg-green-700 rounded-lg">S'affilier</Link>
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;