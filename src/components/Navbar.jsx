import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

function Navbar({ openMenu }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
      <nav className="w-full max-w-6xl mx-4 bg-white/60 backdrop-blur-lg rounded-full shadow-lg border border-white/20">
        <div className="flex justify-between items-center px-4 sm:px-6 py-2">
          {/* Logo */}
          <Link to="/">
            <motion.img 
              src={logoImg} 
              alt="Royal Myanmar Travels Logo" 
              className="h-10 w-10 rounded-full object-cover filter drop-shadow-md transition-all duration-300 hover:drop-shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-3 py-1 text-sm rounded-full transition-colors ${i18n.language.startsWith('en') ? 'font-semibold bg-blue-500 text-white shadow-sm' : 'font-medium text-gray-700 hover:bg-gray-200/50'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('my')} 
                className={`px-3 py-1 text-sm rounded-full transition-colors ${i18n.language.startsWith('my') ? 'font-semibold bg-blue-500 text-white shadow-sm' : 'font-medium text-gray-700 hover:bg-gray-200/50'}`}
              >
                မြန်မာ
              </button>
            </div>

            {/* Modern Menu Button */}
            <motion.button 
              onClick={openMenu} 
              className="text-gray-800 focus:outline-none w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600"></span>
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:w-2/3"></span>
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600"></span>
            </motion.button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;