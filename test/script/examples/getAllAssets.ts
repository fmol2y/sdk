import { ApiPromise } from "@polkadot/api";
import { PolkadotExecutor } from "../executor";
import { PolkadotPoolService } from "../../../src/pool/polkadotPoolService";
import { Router } from "../../../src/api/router";

class GetAllAssetsExample extends PolkadotExecutor {
  async script(api: ApiPromise): Promise<any> {
    const poolService = new PolkadotPoolService(api);
    const router = new Router(poolService);
    return router.getAllAssets();
  }
}

new GetAllAssetsExample("wss://rpc.basilisk.cloud", "Get all paths").run();