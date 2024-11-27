import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import VerifyEmail from './components/auth/VerifyEmail';
import Profile from './components/auth/Profile';
import ChangePassword from './components/auth/ChangePassword';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import OrderConfirmation from './components/checkout/OrderConfirmation';
import SearchResults from './components/search/SearchResults';
import OrderList from './components/orders/OrderList';
import OrderDetails from './components/orders/OrderDetails';
import VendorDashboard from './components/vendor/Dashboard';
import VendorOrders from './components/vendor/OrderManagement';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<CartPage />} />
            <Route 
              path="/checkout" 
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/order-confirmation/:orderId" 
              element={
                <PrivateRoute>
                  <OrderConfirmation />
                </PrivateRoute>
              } 
            />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/change-password" 
              element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <PrivateRoute>
                  <OrderList />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/orders/:orderId" 
              element={
                <PrivateRoute>
                  <OrderDetails />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/vendor/dashboard" 
              element={
                <PrivateRoute roles={['vendor']}>
                  <VendorDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/vendor/orders" 
              element={
                <PrivateRoute roles={['vendor']}>
                  <VendorOrders />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;