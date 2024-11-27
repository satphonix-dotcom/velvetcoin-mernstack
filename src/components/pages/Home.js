import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Electronics', icon: '📱' },
    { name: 'Clothing', icon: '👕' },
    { name: 'Books', icon: '📚' },
    { name: 'Home & Kitchen', icon: '🏠' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Toys', icon: '🎮' },
    { name: 'Automotive', icon: '🚗' }
  ];

  const quickLinks = [
    { name: 'Today\'s Deals', path: '/deals' },
    { name: 'Best Sellers', path: '/best-sellers' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Customer Service', path: '/help' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <img 
          src="/banner.jpg" 
          alt="VelvetCoin Banner" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Welcome to VelvetCoin
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                Your trusted cryptocurrency marketplace for secure and seamless shopping.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/products"
                  className="inline-block bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-500 rounded-md"
                >
                  Start Shopping
                </Link>
                <Link
                  to="/register"
                  className="inline-block bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 rounded-md"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <span className="text-3xl mb-2 block">{category.icon}</span>
              <span className="text-gray-900 font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-center p-4 border border-gray-200 rounded-lg hover:border-yellow-400"
              >
                <span className="text-gray-900 font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Links */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-600 hover:text-yellow-600">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-yellow-600">FAQ</Link></li>
                <li><Link to="/shipping" className="text-gray-600 hover:text-yellow-600">Shipping Information</Link></li>
                <li><Link to="/returns" className="text-gray-600 hover:text-yellow-600">Returns & Refunds</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-yellow-600">About VelvetCoin</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-yellow-600">Careers</Link></li>
                <li><Link to="/press" className="text-gray-600 hover:text-yellow-600">Press Releases</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-yellow-600">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-yellow-600">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sell on VelvetCoin</h3>
              <ul className="space-y-2">
                <li><Link to="/sell" className="text-gray-600 hover:text-yellow-600">Start Selling</Link></li>
                <li><Link to="/vendor/register" className="text-gray-600 hover:text-yellow-600">Become a Vendor</Link></li>
                <li><Link to="/vendor/guidelines" className="text-gray-600 hover:text-yellow-600">Seller Guidelines</Link></li>
                <li><Link to="/vendor/dashboard" className="text-gray-600 hover:text-yellow-600">Vendor Dashboard</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;