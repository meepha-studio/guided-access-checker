import { requireNativeView } from 'expo';
import * as React from 'react';

import { GuidedAccessCheckerViewProps } from './GuidedAccessChecker.types';

const NativeView: React.ComponentType<GuidedAccessCheckerViewProps> =
  requireNativeView('GuidedAccessChecker');

export default function GuidedAccessCheckerView(props: GuidedAccessCheckerViewProps) {
  return <NativeView {...props} />;
}
