import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Logo from '../common/Logo';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="w-full bg-gray-900">
      {/* Top nav */}
      <div className="w-full bg-gray-800">
        <div className="w-full px-4">
          <div className="flex items-center justify-between text-sm text-gray-400 h-8">
            <div className="flex items-center space-x-4">
              <span>Ship to Your Location</span>
              <span>Customer Service</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-gray-800 text-gray-400 focus:outline-none">
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full border-b border-gray-700">
        <div className="w-full px-4">
          <div className="flex items-center py-4">
            {/* Logo */}
            <Logo className="text-white shrink-0" />

            {/* Search */}
            <div className="flex-grow mx-8">
              <form onSubmit={handleSearch} className="flex">
                <select className="px-4 py-2 bg-gray-700 text-white rounded-l-md border-r border-gray-600 focus:outline-none">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Books</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow px-4 py-2 bg-white text-gray-900 focus:outline-none"
                  placeholder="Search products..."
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-r-md"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Right nav */}
            <div className="flex items-center space-x-6 shrink-0">
              {isAuthenticated ? (
                <>
                  <div className="text-white">
                    <div className="text-xs">Hello, {user?.username}</div>
                    <button onClick={handleLogout} className="font-bold hover:text-yellow-500">
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="text-white">
                  <div className="text-xs">Hello, sign in</div>
                  <div className="font-bold hover:text-yellow-500">Account & Lists</div>
                </Link>
              )}

              <Link to="/orders" className="text-white">
                <div className="text-xs">Returns</div>
                <div className="font-bold hover:text-yellow-500">& Orders</div>
              </Link>

              <Link to="/cart" className="flex items-center text-white hover:text-yellow-500">
                <div className="relative">
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {items.length}
                  </span>
                  <svg xmlns="https://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="font-bold ml-2">Cart</span>
              </Link>
            </div>
          </div>

          {/* Categories nav */}
          <div className="flex items-center space-x-6 text-white py-2">
            <button className="hover:text-yellow-500">All</button>
            <button className="hover:text-yellow-500">Today's Deals</button>
            <button className="hover:text-yellow-500">Customer Service</button>
            <button className="hover:text-yellow-500">Registry</button>
            <button className="hover:text-yellow-500">Gift Cards</button>
            <button className="hover:text-yellow-500">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;