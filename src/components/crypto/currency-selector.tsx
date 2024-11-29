import { Button } from '@/components/ui/button';
import { cryptoCurrencies } from '@/lib/hooks/use-crypto-data';
import { cn } from '@/lib/utils';

interface CurrencySelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function CurrencySelector({ selectedId, onSelect }: CurrencySelectorProps) {
  return (
    <div className="flex space-x-2 mb-4">
      {cryptoCurrencies.map((currency) => (
        <Button
          key={currency.id}
          variant={selectedId === currency.id ? 'primary' : 'outline'}
          onClick={() => onSelect(currency.id)}
          className={cn(
            'px-4 py-2',
            selectedId === currency.id && 'ring-2 ring-blue-500 ring-offset-2'
          )}
        >
          {currency.symbol}
        </Button>
      ))}
    </div>
  );
}