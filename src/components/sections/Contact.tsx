import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    accountType: 'individual',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
 // Handle input change
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

// Handle form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Here you would typically handle the form submission to your backend
  console.log('Form submitted:', formData);
  setIsSubmitted(true);

  // Reset form after 3 seconds
  setTimeout(() => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      accountType: 'individual',
      message: '',
    });
  }, 3000);
};

  const locations = [
    {
      city: 'New York',
      address: '88 Financial District, NY 10004',
      phone: '+1 (212) 555-1234',
      email: 'nyc@asetpro.com',
      hours: 'Mon-Fri: 9AM - 6PM EST'
    },
    {
      city: 'London',
      address: '30 Finsbury Square, London EC2A 1AG',
      phone: '+44 20 7123 4567',
      email: 'london@asetpro.com',
      hours: 'Mon-Fri: 9AM - 6PM GMT'
    }
  ];
  
  return (
    <div className="bg-gray-50 py-16 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experts is ready to answer your questions and discuss how AssetPro can help you achieve your financial goals.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-center">
                  Thank you for reaching out. One of our representatives will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      I'm interested in: *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="accountType"
                          value="individual"
                          checked={formData.accountType === 'individual'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Individual Investing</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="accountType"
                          value="institutional"
                          checked={formData.accountType === 'institutional'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Institutional Services</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="accountType"
                          value="advisor"
                          checked={formData.accountType === 'advisor'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Advisor Solutions</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="accountType"
                          value="partnership"
                          checked={formData.accountType === 'partnership'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Partnership Opportunities</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe how we can help you..."
                    />
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="/legal/privacy" className="text-blue-600 hover:underline">privacy policy</a> and consent to be contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
          
          {/* Info and Office Locations */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-gray-600">+1 (800) ASETPRO</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Technical Support</p>
                    <p className="text-gray-600">+1 (888) 555-HELP</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:contact@asetpro.com" className="text-blue-600 hover:underline">
                      contact@asetpro.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-gray-600">24/7 Availability</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Offices</h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className={index > 0 ? "pt-6 border-t border-gray-200" : ""}>
                    <h4 className="font-medium text-blue-600 mb-2">{location.city}</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{location.address}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{location.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                          {location.email}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map or Additional Information */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-blue-50">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Demo</h3>
            <p className="text-gray-700 mb-4">
              Want to see AssetPro in action? Schedule a personalized demo with one of our product specialists.
            </p>
            <a 
              href="/schedule-demo"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Book a Demo Session
            </a>
          </div>
          <div className="relative w-full h-96 bg-gray-300">
            {/* Placeholder for map - you would typically use a mapping component like Google Maps or Mapbox here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg font-medium">Interactive Map Loading...</p>
              {/* This is where your map component would go */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;