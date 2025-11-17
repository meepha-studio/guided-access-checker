import { NativeModule, requireNativeModule } from 'expo';

import { GuidedAccessCheckerModuleEvents } from './GuidedAccessChecker.types';

declare class GuidedAccessCheckerModule extends NativeModule<GuidedAccessCheckerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<GuidedAccessCheckerModule>('GuidedAccessChecker');
