// Import the native module. On web, it will be resolved to TinkLinkNative.web.ts
// and on native platforms to TinkLinkNative.ts
import TinkLinkNativeModule from "./src/TinkLinkNativeModule";

export function startTinkLinkSDK(clientID: string, redirectURI: string): void {
  return TinkLinkNativeModule.startSDK(clientID, redirectURI);
}
