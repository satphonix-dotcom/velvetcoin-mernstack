import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const VendorDashboard = () => {
  const { user } = useSelector(state => state.auth);
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back, {user?.username}!</p>
        </div>
        <button
          onClick={() => setShowAddProduct(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Add New Product
        </button>
      </div>

      {showAddProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Product</h2>
              <button
                onClick={() => setShowAddProduct(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <AddProduct
              onSuccess={() => {
                setShowAddProduct(false);
                // Refresh product list
              }}
              onCancel={() => setShowAddProduct(false)}
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <ProductList />
      </div>
    </div>
  );
};

export default VendorDashboard;