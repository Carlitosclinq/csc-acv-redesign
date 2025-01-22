import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Rechercher..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className={`transition-all duration-200 ${isExpanded ? 'w-full' : 'w-auto'}`}>
      <form 
        onSubmit={handleSubmit}
        className="relative flex items-center"
      >
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-600 hover:text-green-600 focus:outline-none md:hidden"
        >
          <Search className="h-5 w-5" />
        </button>

        <div className={`
          absolute right-0 top-0 md:relative
          ${isExpanded ? 'w-screen md:w-full' : 'w-0 md:w-full'}
          transition-all duration-200 overflow-hidden
          bg-white md:bg-transparent
        `}>
          <div className="flex items-center border rounded-lg bg-white shadow-sm">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              type="submit"
              className="p-2 text-green-600 hover:text-green-700 rounded-r-lg"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;