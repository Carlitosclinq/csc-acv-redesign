import React from 'react';

const LanguageSwitcher = () => {
  return (
    <div className="flex space-x-2">
      <button 
        className="px-2 py-1 rounded hover:bg-green-700 text-sm">
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button 
        className="px-2 py-1 rounded hover:bg-green-700 text-sm">
        NL
      </button>
    </div>
  );
};

export default LanguageSwitcher;