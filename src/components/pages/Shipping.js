import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Methods</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Standard Shipping</h3>
            <p className="text-gray-600">3-5 business days</p>
            <p className="text-gray-600">Free on orders over $100</p>
            <p className="text-gray-600">$10 for orders under $100</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Express Shipping</h3>
            <p className="text-gray-600">1-2 business days</p>
            <p className="text-gray-600">$25 flat rate</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">International Shipping</h2>
        <p>We currently ship to the following regions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>North America</li>
          <li>Europe</li>
          <li>Asia Pacific</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tracking Your Order</h2>
        <p>Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.</p>
      </div>
    </div>
  );
};

export default Shipping;