import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WalletConnectionProps {
  className?: string;
}

export const WalletConnection: React.FC<WalletConnectionProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isBaseNetwork, setIsBaseNetwork] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState('0.00');

  // Simulate checking if window.ethereum exists
  const hasEthereum = typeof window !== 'undefined';

  // Connect wallet function
  const connectWallet = async () => {
    if (!hasEthereum) {
      alert('Please install MetaMask or another Ethereum wallet to connect.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate wallet connection with Base blockchain
      setTimeout(() => {
        const mockAddress = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        setWalletAddress(mockAddress);
        setIsConnected(true);
        setIsBaseNetwork(true);
        setBalance((Math.random() * 5).toFixed(4));
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setIsLoading(false);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setIsBaseNetwork(false);
    setBalance('0.00');
  };

  // Switch network function
  const switchToBaseNetwork = async () => {
    if (!hasEthereum) return;

    setIsLoading(true);

    try {
      // Simulate network switching to Base
      setTimeout(() => {
        setIsBaseNetwork(true);
        setBalance((Math.random() * 5).toFixed(4));
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error switching network:', error);
      setIsLoading(false);
      alert('Failed to switch network. Please try again.');
    }
  };

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className={className}>
      {!isConnected ? (
        <motion.button
          className="bg-white text-gray-800 border border-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center"
          onClick={connectWallet}
          disabled={isLoading}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connecting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Connect Wallet
            </>
          )}
        </motion.button>
      ) : !isBaseNetwork ? (
        <motion.button
          className="bg-yellow-100 text-yellow-800 border border-yellow-200 font-medium py-2 px-4 rounded-lg hover:bg-yellow-50 transition-all duration-300 flex items-center"
          onClick={switchToBaseNetwork}
          disabled={isLoading}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-yellow-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Switching...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Switch to Base
            </>
          )}
        </motion.button>
      ) : (
        <div className="relative group">
          <motion.button
            className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
            onClick={() => {}}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            {formatAddress(walletAddress)} • {balance} ETH
          </motion.button>
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <button 
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;
