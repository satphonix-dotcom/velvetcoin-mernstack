import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">About VelvetCoin</h1>
      <div className="prose max-w-none">
        <p>Welcome to VelvetCoin, your premier cryptocurrency marketplace. Founded in 2024, we're dedicated to providing a secure and seamless shopping experience using cryptocurrency.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p>To revolutionize e-commerce by bridging the gap between traditional shopping and cryptocurrency payments, making digital currency transactions accessible to everyone.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose VelvetCoin?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Secure USDC payments</li>
          <li>Wide range of products</li>
          <li>Verified vendors</li>
          <li>24/7 customer support</li>
          <li>Fast shipping worldwide</li>
        </ul>
      </div>
    </div>
  );
};

export default About;