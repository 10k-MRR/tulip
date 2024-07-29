// Import the native module. On web, it will be resolved to TinkLinkNative.web.ts
// and on native platforms to TinkLinkNative.ts
import TinkLinkNativeModule from "./src/TinkLinkNativeModule";

export function startTinkLinkSDK(): string {
  return TinkLinkNativeModule.startSDK();
}
