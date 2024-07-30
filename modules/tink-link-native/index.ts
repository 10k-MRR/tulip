// Import the native module. On web, it will be resolved to TinkLinkNative.web.ts
// and on native platforms to TinkLinkNative.ts
import TinkLinkNativeModule from "./src/TinkLinkNativeModule";
import { EventEmitter, Subscription } from "expo-modules-core";

const emitter = new EventEmitter(TinkLinkNativeModule);

export const CONNECT_ACCOUNTS_FOR_ONE_TIME_ACCESS =
  "CONNECT_ACCOUNTS_FOR_ONE_TIME_ACCESS";

export type ConnectAccountsForOneTimeAccessEvent = {
  authCode: string | undefined;
  error: string | undefined;
};

export function connectAccountsForOneTimeAccess(
  clientID: string,
  redirectURI: string,
) {
  return TinkLinkNativeModule.connectAccountsForOneTimeAccess(
    clientID,
    redirectURI,
  );
}

export function connectAccountsForOneTimeAccessListner(
  listener: (event: ConnectAccountsForOneTimeAccessEvent) => void,
): Subscription {
  return emitter.addListener<ConnectAccountsForOneTimeAccessEvent>(
    CONNECT_ACCOUNTS_FOR_ONE_TIME_ACCESS,
    listener,
  );
}
