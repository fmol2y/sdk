import {
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

const xcmDeliveryFeeAmount = 0.047;

const toKusamaAssetHub: AssetConfig[] = [
  new AssetConfig({
    asset: ksm,
    balance: BalanceBuilder().substrate().system().account(),
    destination: kusamaAssetHub,
    destinationFee: {
      amount: 0.001,
      asset: ksm,
      balance: BalanceBuilder().substrate().system().account(),
    },
    extrinsic: ExtrinsicBuilderV2()
      .xcmPallet()
      .limitedTeleportAssets(0)
      .here(),
    fee: {
      asset: ksm,
      balance: BalanceBuilder().substrate().system().account(),
      xcmDeliveryFeeAmount,
    },
  })
];

export const kusamaConfig: ChainConfig = new ChainConfig({
  assets: [...toKusamaAssetHub],
  chain: kusama
});
