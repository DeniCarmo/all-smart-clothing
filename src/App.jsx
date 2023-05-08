import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './scss/main.scss';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Authentication from './components/Authentication';

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
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
