import React, { useState } from 'react';
import { Copy, Check, QrCode, X } from 'lucide-react';
import { Button } from './Button';
import { WALLET_ADDRESS } from '../constants';

interface PaymentModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, onConfirm }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-slate-900 border border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 transform transition-all animate-float">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Оплата</h2>
          <p className="text-slate-400 text-sm">Отправьте <span className="text-purple-400 font-bold">0.05 ETH</span> чтобы открыть Тайник.</p>
        </div>

        {/* Fake QR Code Area */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white rounded-xl">
             <QrCode size={150} color="black" />
          </div>
        </div>

        {/* Address Copy Area */}
        <div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between mb-6 border border-slate-700">
          <code className="text-xs text-slate-300 font-mono break-all mr-2">
            {WALLET_ADDRESS}
          </code>
          <button 
            onClick={handleCopy}
            className="p-2 hover:bg-slate-700 rounded-md transition-colors text-purple-400"
            title="Копировать адрес"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        <div className="space-y-3">
          <Button onClick={onConfirm} className="w-full">
            Я оплатил
          </Button>
          <p className="text-xs text-center text-slate-500">
            Сканирование блокчейна...
          </p>
        </div>
      </div>
    </div>
  );
};