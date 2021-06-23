import { Injectable } from '@nestjs/common';
import { Actor, ActorSubclass, AnonymousIdentity, HttpAgent } from '@dfinity/agent';
import { blobFromBuffer } from '@dfinity/candid';
import fetch from 'node-fetch';
import * as fs from 'fs';
import * as path from 'path';
import { keys } from 'lodash';

const DfinityRegistryDid = ({ IDL }: { IDL: any }) => {
  return IDL.Service({
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'setCount' : IDL.Func([IDL.Nat], [], []),
  });
};

@Injectable()
export class AppService {
  readonly httpAgent: HttpAgent;
  private canisters: Record<string, ActorSubclass> = {};
  private DFINITY_HOST = process.env.DFINITY_HOST || 'http://localhost:8000'

  constructor() {
    this.httpAgent = new HttpAgent({ fetch: fetch, host: this.DFINITY_HOST, identity: new AnonymousIdentity() })
  }
  getHello(): string {
    return 'Hello World!';
  }

  async deploy(): Promise<string> {
    await this.httpAgent.fetchRootKey();
    const canisterId = await Actor.createCanister({ agent: this.httpAgent });

    try {
      const canister = await Actor.createAndInstallCanister(DfinityRegistryDid, {
        module: blobFromBuffer(
          fs.readFileSync(
            path.resolve(
              __dirname,
              '../dfinity/dfinity.wasm'
            )
          ) as any
        ),
        arg: undefined,
      }, {
        agent: this.httpAgent,
        canisterId
      })

      this.canisters[canisterId.toText()] = canister;

      console.info(`Successfully installed: ${canisterId.toString()}`)
    } catch (e) {
      console.error(`Error while installing: ${e.message}`, e);
      throw e;
    }

    return canisterId.toText();
  }

  list() {
    return keys(this.canisters);
  }

  async getCount(canisterId: string) {
    return this.canisters[canisterId]['getCount']();
  }

  async setCount(canisterId: string, count: number) {
    return this.canisters[canisterId]['setCount'](count);
  }
}
