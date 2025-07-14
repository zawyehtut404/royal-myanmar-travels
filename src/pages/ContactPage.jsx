import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const form = useRef();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize state with the subject from location, if it exists
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: location.state?.subject || '',
    message: '',
  });

  // Effect to update the form if the user navigates here again with a new subject
  useEffect(() => {
    if (location.state?.subject) {
      setFormData(prevData => ({ ...prevData, subject: location.state.subject }));
    }
  }, [location.state]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          alert('Thank you for your message! It has been sent successfully.');
          form.current.reset();
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear state
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Royal Myanmar Travels</title>
        <meta name="description" content="Get in touch with Royal Myanmar Travels. Contact us to plan your trip, ask a question, or provide feedback." />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-gray-600 mt-2">We'd love to hear from you. Please fill out the form below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-2"><strong>Address:</strong> No. 123, Main Road, Yangon, Myanmar</p>
                <p className="mb-2"><strong>Phone:</strong> +95 9 123 456 789</p>
                <p><strong>Email:</strong> contact@royalmyanmartravels.com</p>
              </div>
              <div className="rounded-lg shadow-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.520593433313!2d96.15614867599299!3d16.80058448398863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec6a235d63f9%3A0x296339794958ef40!2sSule%20Pagoda!5e0!3m2!1sen!2smm!4v1720963161314!5m2!1sen!2smm" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;