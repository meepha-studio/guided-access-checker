import { registerWebModule, NativeModule } from 'expo';

import { GuidedAccessCheckerModuleEvents } from './GuidedAccessChecker.types';

class GuidedAccessCheckerModule extends NativeModule<GuidedAccessCheckerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(GuidedAccessCheckerModule, 'GuidedAccessCheckerModule');
