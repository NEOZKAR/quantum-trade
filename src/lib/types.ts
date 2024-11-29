export interface CryptoPrice {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
}