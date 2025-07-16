import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  const location = useLocation();
  const FORMSPREE_URL = 'https://formspree.io/f/mvgqowab';
  const initialSubject = location.state?.subject || '';

  // State to manage the submission status
  const [submissionStatus, setSubmissionStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus({ submitting: true, success: false, error: false });

    const form = e.target;
    const formData = new FormData(form);

    fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSubmissionStatus({ submitting: false, success: true, error: false });
        form.reset();
      } else {
        response.json().then(data => {
          // You can use the 'data' object here to show more specific errors if you want
          setSubmissionStatus({ submitting: false, success: false, error: true });
        });
      }
    }).catch(error => {
      setSubmissionStatus({ submitting: false, success: false, error: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Royal Myanmar Travels</title>
        <meta name="description" content="Get in touch with Royal Myanmar Travels..." />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-gray-600 mt-2">We'd love to hear from you. Please fill out the form below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                {/* ... all your input fields (name, email, subject, message) remain the same ... */}
                <div className="mb-4">...</div>

                <button
                  type="submit"
                  disabled={submissionStatus.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:bg-gray-400"
                >
                  {submissionStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Success and Error Messages */}
                {submissionStatus.success && (
                  <div className="mt-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your message has been sent.</span>
                  </div>
                )}
                {submissionStatus.error && (
                  <div className="mt-4 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
            <div>
              {/* ... Contact Info & Map ... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;