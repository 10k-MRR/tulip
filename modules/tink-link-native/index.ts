// Import the native module. On web, it will be resolved to TinkLinkNative.web.ts
// and on native platforms to TinkLinkNative.ts
import TinkLinkNativeModule from "./src/TinkLinkNativeModule";
import { EventEmitter, Subscription } from "expo-modules-core";

const emitter = new EventEmitter(TinkLinkNativeModule);

export type TinkLinkBankAggrgationSucceedEvent = {
  authCode: string;
};

export function startTinkLinkSDK(clientID: string, redirectURI: string) {
  return TinkLinkNativeModule.startSDK(clientID, redirectURI);
}

export function tinkLinkBankAggregationSucceedListner(
  listener: (event: TinkLinkBankAggrgationSucceedEvent) => void,
): Subscription {
  return emitter.addListener<TinkLinkBankAggrgationSucceedEvent>(
    "succeed",
    listener,
  );
}
