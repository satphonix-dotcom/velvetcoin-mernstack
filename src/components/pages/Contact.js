import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">Have questions? We're here to help!</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">support@velvetcoin.com</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600">
                123 Blockchain Street<br />
                Crypto Valley, CV 12345<br />
                United States
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"></textarea>
            </div>
            <button type="submit" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;