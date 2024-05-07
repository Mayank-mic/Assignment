
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const CryptoDataComponent: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);

  useEffect(() => {
    const socket = io('wss://api.pi42.com');

    socket.on('connect', () => {
      console.log('Connected to Pi42 WebSocket');
    });

    socket.on('cryptoData', (data) => {
      setCryptoData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Crypto Contracts</h2>
      <ul>
        {cryptoData.map((contract) => (
          <li key={contract.symbol}>
            {contract.symbol} - {contract.lastPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoDataComponent;
