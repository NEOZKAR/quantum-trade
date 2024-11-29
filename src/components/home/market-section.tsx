import { useState } from 'react';
import { PriceChart } from '@/components/crypto/price-chart';
import { MarketOverview } from '@/components/crypto/market-overview';
import { CurrencySelector } from '@/components/crypto/currency-selector';
import { useCryptoData, cryptoCurrencies } from '@/lib/hooks/use-crypto-data';

export function MarketSection() {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const { priceData, currency } = useCryptoData(selectedCrypto);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Market Overview</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real-time cryptocurrency market data and analysis
          </p>
        </div>

        <div className="mb-8">
          <MarketOverview currencies={cryptoCurrencies} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {currency?.name} ({currency?.symbol})
              </h3>
              <div className="text-sm text-gray-500">Last 7 days</div>
            </div>
            
            <CurrencySelector
              selectedId={selectedCrypto}
              onSelect={setSelectedCrypto}
            />
            
            <PriceChart data={priceData} />
          </div>
        </div>
      </div>
    </section>
  );
}