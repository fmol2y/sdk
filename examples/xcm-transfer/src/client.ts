import { defineChain } from 'viem';

export const polkadot = defineChain({
  id: 0,
  name: 'Polkadot',
  network: 'polkadot',
  nativeCurrency: {
    decimals: 10,
    name: 'DOT',
    symbol: 'DOT',
  },
  rpcUrls: {
    public: {
      http: ['https://rpc.polkadot.io'],
      webSocket: ['wss://rpc.polkadot.io'],
    },
    default: {
      http: ['https://rpc.polkadot.io'],
      webSocket: ['wss://rpc.polkadot.io'],
    },
  },
  testnet: false,
});

export const assetHub = defineChain({
  id: 1000,
  name: 'AssetHub',
  network: 'polkadot',
  nativeCurrency: {
    decimals: 10,
    name: 'DOT',
    symbol: 'DOT',
  },
  rpcUrls: {
    public: {
      http: ['https://statemint.api.onfinality.io/public'],
      webSocket: ['wss://polkadot-asset-hub-rpc.polkadot.io'],
    },
    default: {
      http: ['https://statemint.api.onfinality.io/public'],
      webSocket: ['wss://polkadot-asset-hub-rpc.polkadot.io'],
    },
  },
  testnet: false,
});
export const hydradx = defineChain({
  id: 222222,
  name: 'HydraDX',
  network: 'hydradx',
  nativeCurrency: {
    decimals: 18,
    name: 'WETH',
    symbol: 'WETH',
  },
  rpcUrls: {
    public: {
      http: ['https://rpc.nice.hydration.cloud'],
      webSocket: ['wss://rpc.nice.hydration.cloud'],
    },
    default: {
      http: ['https://rpc.nice.hydration.cloud'],
      webSocket: ['wss://rpc.nice.hydration.cloud'],
    },
  },
  testnet: false,
});

const moonbeam = defineChain({
  id: 1284,
  name: 'Moonbeam',
  network: 'moonbeam',
  nativeCurrency: {
    decimals: 18,
    name: 'GLMR',
    symbol: 'GLMR',
  },
  rpcUrls: {
    public: {
      http: ['https://rpc.api.moonbeam.network'],
      webSocket: ['wss://rpc.api.moonbeam.network'],
    },
    default: {
      http: ['https://rpc.api.moonbeam.network'],
      webSocket: ['wss://rpc.api.moonbeam.network'],
    },
  },
  testnet: false,
});
