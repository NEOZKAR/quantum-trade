import { useState, useEffect } from 'react';
import type { CryptoPrice, CryptoCurrency } from '@/lib/types';

// In a real app, this would fetch from an API
const generateSampleData = (basePrice: number): CryptoPrice[] => {
  const data: CryptoPrice[] = [];
  let currentPrice = basePrice;
  
  for (let i = 0; i < 100; i++) {
    const time = Math.floor(Date.now() / 1000) - (100 - i) * 3600;
    const variance = currentPrice * 0.02;
    const open = currentPrice;
    const close = currentPrice + (Math.random() - 0.5) * variance;
    const high = Math.max(open, close) + Math.random() * variance;
    const low = Math.min(open, close) - Math.random() * variance;
    
    data.push({ time, open, high, low, close });
    currentPrice = close;
  }
  
  return data;
};

export const cryptoCurrencies: CryptoCurrency[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 42069.42,
    change24h: 2.5,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2789.15,
    change24h: -1.2,
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    symbol: 'LTC',
    price: 189.34,
    change24h: 0.8,
  },
];

export function useCryptoData(cryptoId: string) {
  const [priceData, setPriceData] = useState<CryptoPrice[]>([]);
  const currency = cryptoCurrencies.find((c) => c.id === cryptoId);

  useEffect(() => {
    if (currency) {
      setPriceData(generateSampleData(currency.price));
    }
  }, [cryptoId, currency]);

  return { priceData, currency };
}