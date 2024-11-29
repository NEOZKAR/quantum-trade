import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, LineChart, Lock } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Simplify your trading with</span>
                <span className="block text-blue-600">AI-powered automation</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience the future of crypto trading with our advanced quantitative trading system.
                Let AI handle your trades while you focus on what matters most.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" size="lg" className="w-full">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Bot className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">AI Trading</h3>
              <p className="text-sm text-gray-600">24/7 Automated</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <LineChart className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-gray-600">Real-time Data</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Lock className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-gray-600">Bank-grade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}