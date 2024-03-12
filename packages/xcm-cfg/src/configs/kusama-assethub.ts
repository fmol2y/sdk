import {
  AssetMinBuilder,
  BalanceBuilder,
} from '@moonbeam-network/xcm-builder';
import {
  AssetConfig,
  ChainConfig,
  kusama,
} from '@moonbeam-network/xcm-config';

import { ksm } from '../assets';
import { kusamaAssetHub } from '../chains';
import { ExtrinsicBuilderV2 } from '../builders';

const toKusama: AssetConfig[] = [
  new AssetConfig({
    asset: ksm,
    balance: BalanceBuilder().substrate().system().account(),
    destination: kusama,
    destinationFee: {
      amount: 0.002,
      asset: ksm,
      balance: BalanceBuilder().substrate().assets().account(),
    },
    extrinsic: ExtrinsicBuilderV2()
      .polkadotXcm()
      .limitedTeleportAssets(1)
      .here(),
    fee: {
      asset: ksm,
      balance: BalanceBuilder().substrate().system().account(),
    },
    min: AssetMinBuilder().assets().asset(),
  }),
];

export const kusamaAssetHubConfig = new ChainConfig({
  assets: [...toKusama],
  chain: kusamaAssetHub,
});

