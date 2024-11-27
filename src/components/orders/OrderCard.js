import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const OrderCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Order #{order._id}
            </h3>
            <p className="text-sm text-gray-500">
              Placed on {format(new Date(order.createdAt), 'MMM dd, yyyy')}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {order.items.map((item) => (
                <li key={item._id} className="py-4 flex">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </h4>
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${order.total.toFixed(2)}</p>
          </div>
        </div>

        {order.trackingNumber && (
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <p className="text-sm font-medium text-gray-900">
              Tracking Number: {order.trackingNumber}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-4">
          <Link
            to={`/orders/${order._id}`}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          >
            View Details
          </Link>
          {order.status === 'pending' && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => {/* Cancel order functionality */}}
            >
              Cancel Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;