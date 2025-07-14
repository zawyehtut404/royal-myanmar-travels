import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import the hook

function Sidebar({ isOpen, closeMenu }) {
  const { t, i18n } = useTranslation(); // Use the hook

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          ></motion.div>

          {/* Sidebar Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">{t('navbar.home')}</h2>
                <button onClick={closeMenu} className="text-gray-500 hover:text-gray-800">
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col flex-grow">
                <Link to="/" className="text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md py-3 px-4 transition-all" onClick={closeMenu}>{t('navbar.home')}</Link>
                <Link to="/about" className="text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md py-3 px-4 transition-all" onClick={closeMenu}>{t('navbar.about')}</Link>
                <Link to="/services" className="text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md py-3 px-4 transition-all" onClick={closeMenu}>{t('navbar.services')}</Link>
                <Link to="/gallery" className="text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md py-3 px-4 transition-all" onClick={closeMenu}>{t('navbar.gallery')}</Link>
                <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md py-3 px-4 transition-all" onClick={closeMenu}>{t('navbar.contact')}</Link>
              </nav>

              {/* Language Switcher for Mobile */}
              <div className="mt-6 border-t pt-4">
                 <p className="text-sm font-semibold text-gray-500 mb-2">{t('language')}</p>
                 <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => changeLanguage('en')} 
                      className={`px-3 py-1 text-sm rounded w-full ${i18n.language === 'en' ? 'font-bold bg-blue-100 text-blue-700' : 'font-medium bg-gray-200'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => changeLanguage('my')} 
                      className={`px-3 py-1 text-sm rounded w-full ${i18n.language === 'my' ? 'font-bold bg-blue-100 text-blue-700' : 'font-medium bg-gray-200'}`}
                    >
                      မြန်မာ
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;