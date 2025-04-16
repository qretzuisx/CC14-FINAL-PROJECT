import React, { useState } from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8">

          {/* Contact Info */}
          <div className="md:w-1/3 space-y-6 bg-purple-50 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-purple-800">Contact Us</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Baguio City, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">rhizalynespiritu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                  }`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                  }`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 ${
                    errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                  }`}
                  placeholder="Write something here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center shadow-md"
                >
                  Send It
                </button>
              </div>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  Message sent! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
