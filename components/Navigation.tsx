import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isDestinationActive = () => {
    return location.pathname.startsWith('/destinations') || location.pathname.startsWith('/city');
  };

  const cities = [
    { name: 'Sarajevo', path: '/city/sarajevo' },
    { name: 'Mostar', path: '/city/mostar' },
    { name: 'Bihać', path: '/city/bihac' },
    { name: 'Jajce', path: '/city/jajce' },
    { name: 'Blagaj', path: '/city/blagaj' },
    { name: 'Neum', path: '/city/neum' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇧🇦</span>
            <span className="text-xl font-semibold text-blue-700">Otkrijte Bosnu i Hercegovinu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700 hover:text-blue-600"
              } px-3 py-2 transition-colors`}
            >
              Početna
            </Link>
            
            {/* Dropdown for Destinations */}
            <div className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`${
                  isDestinationActive() ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700 hover:text-blue-600"
                } px-3 py-2 transition-colors flex items-center gap-1`}
              >
                Destinacije
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden min-w-[200px] border-2 border-yellow-400">
                  <Link
                    to="/destinations"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 border-b border-gray-100"
                  >
                    Sve destinacije
                  </Link>
                  {cities.map((city) => (
                    <Link
                      key={city.path}
                      to={city.path}
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 border-b border-gray-100 last:border-b-0"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/discover"
              className={`${
                isActive("/discover") ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700 hover:text-blue-600"
              } px-3 py-2 transition-colors`}
            >
              Otkrijte više
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`block px-3 py-2 ${
                isActive("/") ? "text-blue-700 bg-blue-50" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Početna
            </Link>
            <Link
              to="/destinations"
              className={`block px-3 py-2 ${
                isActive("/destinations") ? "text-blue-700 bg-blue-50" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Destinacije
            </Link>
            {cities.map((city) => (
              <Link
                key={city.path}
                to={city.path}
                className={`block px-3 py-2 pl-8 text-sm ${
                  isActive(city.path) ? "text-blue-700 bg-blue-50" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                • {city.name}
              </Link>
            ))}
            <Link
              to="/discover"
              className={`block px-3 py-2 ${
                isActive("/discover") ? "text-blue-700 bg-blue-50" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Otkrijte više
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}