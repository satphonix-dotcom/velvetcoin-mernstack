import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <img 
          src="/logo.svg" 
          alt="VelvetCoin"
          className="h-10 w-10 object-contain"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
        />
      </div>
      <span className="ml-2 text-2xl font-bold tracking-tight">
        Velvet<span className="text-yellow-400">Coin</span>
      </span>
    </Link>
  );
};

export default Logo;