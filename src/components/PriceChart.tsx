import React from 'react';
import { LineChart, ArrowUp, Clock } from 'lucide-react';

const intervals = ['1h', '4h', '12h', '24h', '7d'];

export default function PriceChart({ 
  currentPrice, 
  selectedInterval, 
  onIntervalChange 
}: { 
  currentPrice: number;
  selectedInterval: string;
  onIntervalChange: (interval: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <LineChart className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Price Analysis</h2>
        </div>
        <div className="flex gap-2">
          {intervals.map((interval) => (
            <button
              key={interval}
              onClick={() => onIntervalChange(interval)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                selectedInterval === interval
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {interval}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative h-64 mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-lg"></div>
        {/* Mock chart visualization - in production, use a proper charting library */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600"></div>
        <div className="absolute bottom-0 left-0 h-48 w-2 bg-indigo-600/10 rounded-t-full"></div>
        <div className="absolute bottom-0 left-[20%] h-32 w-2 bg-indigo-600/20 rounded-t-full"></div>
        <div className="absolute bottom-0 left-[40%] h-56 w-2 bg-indigo-600/30 rounded-t-full"></div>
        <div className="absolute bottom-0 left-[60%] h-40 w-2 bg-indigo-600/40 rounded-t-full"></div>
        <div className="absolute bottom-0 left-[80%] h-44 w-2 bg-indigo-600/50 rounded-t-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Current Price</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${currentPrice.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Predicted</span>
          </div>
          <p className="text-2xl font-bold text-green-600">
            ${(currentPrice * 1.05).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}