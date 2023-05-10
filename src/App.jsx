import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './scss/main.scss';
import Home from './routes/Home';
import Header from './components/Header';
import Authentication from './components/Authentication';
import Checkout from './routes/Checkout';
import Listing from './routes/Listing';
import Category from './components/shop/CategoryListing';

const changeTitle = () => {
  document.title = 'All Smart Clothing';
};

const App = () => {
  useEffect(() => {
    changeTitle();
  }, []);

  return (
    <Routes>
      <Route to="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="listing">
          <Route index element={<Listing />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
