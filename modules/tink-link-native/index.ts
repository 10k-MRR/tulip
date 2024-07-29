import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TinkLinkNative.web.ts
// and on native platforms to TinkLinkNative.ts
import TinkLinkNativeModule from './src/TinkLinkNativeModule';
import TinkLinkNativeView from './src/TinkLinkNativeView';
import { ChangeEventPayload, TinkLinkNativeViewProps } from './src/TinkLinkNative.types';

// Get the native constant value.
export const PI = TinkLinkNativeModule.PI;

export function hello(): string {
  return TinkLinkNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await TinkLinkNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(TinkLinkNativeModule ?? NativeModulesProxy.TinkLinkNative);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TinkLinkNativeView, TinkLinkNativeViewProps, ChangeEventPayload };
