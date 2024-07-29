import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TinkLinkNativeViewProps } from './TinkLinkNative.types';

const NativeView: React.ComponentType<TinkLinkNativeViewProps> =
  requireNativeViewManager('TinkLinkNative');

export default function TinkLinkNativeView(props: TinkLinkNativeViewProps) {
  return <NativeView {...props} />;
}
