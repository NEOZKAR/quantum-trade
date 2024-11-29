import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import type { CryptoCurrency } from '@/lib/types';
import { cn } from '@/lib/utils';

interface MarketOverviewProps {
  currencies: CryptoCurrency[];
}

export function MarketOverview({ currencies }: MarketOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {currencies.map((currency) => (
        <div
          key={currency.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{currency.name}</h3>
              <p className="text-sm text-gray-500">{currency.symbol}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                ${currency.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p
                className={cn(
                  'text-sm flex items-center justify-end',
                  currency.change24h >= 0 ? 'text-green-600' : 'text-red-600'
                )}
              >
                {currency.change24h >= 0 ? (
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 mr-1" />
                )}
                {Math.abs(currency.change24h)}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}