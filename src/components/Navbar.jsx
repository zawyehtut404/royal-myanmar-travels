import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Hook အသစ်ကို import လုပ်ပါ
import logoImg from '../assets/logo.png';

function Navbar({ openMenu }) {
  const { t, i18n } = useTranslation(); // <-- Hook ကိုသုံးပါ

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white/90 shadow-md sticky top-0 z-40 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          <Link to="/">
            <img src={logoImg} alt="Royal Myanmar Travels Logo" className="h-10 w-auto" />
          </Link>

          <div className="flex items-center">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2 mr-6">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'font-bold text-blue-600' : 'font-medium'}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => changeLanguage('my')} 
                className={`px-2 py-1 text-sm rounded ${i18n.language === 'my' ? 'font-bold text-blue-600' : 'font-medium'}`}
              >
                မြန်မာ
              </button>
            </div>
            
            {/* Menu Button */}
            <button onClick={openMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;