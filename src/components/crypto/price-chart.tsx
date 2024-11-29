import { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi } from 'lightweight-charts';
import { cn } from '@/lib/utils';
import type { CryptoPrice } from '@/lib/types';

interface PriceChartProps {
  data: CryptoPrice[];
  containerClassName?: string;
}

export function PriceChart({ data, containerClassName }: PriceChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#64748b',
        },
        grid: {
          vertLines: { color: '#e2e8f0' },
          horzLines: { color: '#e2e8f0' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#22c55e',
        downColor: '#ef4444',
        borderVisible: false,
        wickUpColor: '#22c55e',
        wickDownColor: '#ef4444',
      });

      candlestickSeries.setData(data);
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return (
    <div ref={chartContainerRef} className={cn('w-full', containerClassName)} />
  );
}