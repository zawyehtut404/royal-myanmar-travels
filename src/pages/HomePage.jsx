import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPlaneDeparture, FaSmileBeam } from 'react-icons/fa';

import { tourPackages } from '../data/tours';
import Counter from '../components/Counter';
import Loading from '../components/Loading';
import heroBg from '../assets/hero-bg.jpg';

function HomePage() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;
  const featuredTours = tourPackages.slice(0, 3);
  
  const testimonials = [
    { id: 1, quote: "An absolutely unforgettable experience! The guides were knowledgeable and friendly. Royal Myanmar Travels made our trip seamless and magical.", name: "John & Jane Doe", origin: "USA" },
    { id: 2, quote: "I highly recommend their services. The tour was well-organized, and we got to see the authentic side of Myanmar. Excellent value for money.", name: "Emily White", origin: "United Kingdom" },
    { id: 3, quote: "From booking to the final day of our tour, everything was perfect. The team was professional and attentive to all our needs. Thank you!", name: "Kenji Tanaka", origin: "Japan" },
  ];

  if (!ready) {
    return <div className="w-full h-screen flex justify-center items-center"><Loading /></div>;
  }

  return (
    <>
      <Helmet>
        <title>{t('home.welcome')}</title>
        <meta name="description" content={t('home.tagline')} />
      </Helmet>
      <div className="bg-white text-gray-800">
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 whitespace-pre-line ${lang === 'my' ? 'font-padauk' : ''}`}>
              {t('home.welcome')}
            </h1>
            <p className="text-lg md:text-xl mb-8">{t('home.tagline')}</p>
            <a href="#tours" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              {t('home.explore_button')}
            </a>
          </div>
        </div>

        <section id="tours" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">{t('home.featured_tours_title')}</h2>
            <p className="text-center text-gray-600 mb-12">{t('home.featured_tours_subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour, index) => (
                <motion.div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
                  <img src={tour.image} alt={tour.name[lang]} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{tour.name[lang] || tour.name.en}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{tour.description[lang] || tour.description.en}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                      <Link to={`/services/${tour.slug}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <FaPlaneDeparture size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={50} />+</p>
                <p className="text-xl mt-2">{t('home.stats_packages')}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaMapMarkedAlt size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={25} />+</p>
                <p className="text-xl mt-2">{t('home.stats_destinations')}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaSmileBeam size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={1500} />+</p>
                <p className="text-xl mt-2">{t('home.stats_clients')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.testimonials_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.origin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('home.cta_title')}</h2>
            <p className="text-lg text-blue-100 mb-8">{t('home.cta_subtitle')}</p>
            <Link to="/contact">
              <motion.button className="bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg" whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                {t('home.cta_button')}
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;