import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { tourPackages } from '../data/tours';
import NotFoundPage from './NotFoundPage';

function TourDetailPage() {
  const { slug } = useParams();
  const tour = tourPackages.find((p) => p.slug === slug);

  if (!tour) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{tour.name} | Royal Myanmar Travels</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <img src={tour.image} alt={tour.name} className="w-full max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tour.name}</h1>
            <div className="flex flex-wrap items-center space-x-4 text-gray-600 mb-6">
              <span className="font-semibold">Duration: {tour.duration}</span>
              <span className="text-gray-300">|</span>
              <span className="font-semibold">Price: {tour.price}</span>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p>{tour.longDescription}</p>
            </div>
            
            <div className="mt-12 text-center md:text-left">
              <Link
                to="/contact"
                state={{ subject: `Booking Inquiry: ${tour.name}` }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book This Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourDetailPage;