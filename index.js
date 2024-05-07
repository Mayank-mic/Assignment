import React from 'react';
import AuthComponent from '../components/AuthComponent';
import CryptoDataComponent from '../components/CryptoDataComponent';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Crypto App</h1>
      <AuthComponent />
      <CryptoDataComponent />
    </div>
  );
};

export default Home;
