import { ChainConfig } from '@moonbeam-network/xcm-config';

import { acalaConfig } from './acala';
import { assetHubConfig } from './assethub';
import { astarConfig } from './astar';
import { bifrostConfig } from './bifrost';
import { centrifugeConfig } from './centrifuge';
import { hydraDxConfig } from './hydraDX';
import { interlayConfig } from './interlay';
import { kusamaConfig } from './kusama';
import { kusamaAssetHubConfig } from './kusama-assethub';
import { moonbeamConfig } from './moonbeam';
import { nodleConfig } from './nodle';
import { polkadotConfig } from './polkadot';
import { subsocialConfig } from './subsocial';
import { uniqueConfig } from './unique';
import { zeitgeistConfig } from './zeitgeist';
import { phalaConfig } from './phala';
import { crustConfig } from './crust';

export const chainsConfig: ChainConfig[] = [
  acalaConfig,
  assetHubConfig,
  astarConfig,
  bifrostConfig,
  centrifugeConfig,
  hydraDxConfig,
  interlayConfig,
  kusamaConfig,
  kusamaAssetHubConfig,
  moonbeamConfig,
  nodleConfig,
  polkadotConfig,
  subsocialConfig,
  uniqueConfig,
  zeitgeistConfig,
  phalaConfig,
  crustConfig,
];

export const chainsConfigMap = new Map<string, ChainConfig>(
  chainsConfig.map((config) => [config.chain.key, config])
);
