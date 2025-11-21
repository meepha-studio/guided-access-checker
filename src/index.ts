import { Platform } from 'react-native';
import { requireNativeModule, EventEmitter } from 'expo-modules-core';

let GuidedAccessChecker: any = null;
let emitter: any = null;

if (Platform.OS !== 'ios') {
    // Dummy implementation for web
    GuidedAccessChecker = {
        isGuidedAccessEnabled: () => false,
        isGuidedAccessActive: async () => false,
    };
} else {
    GuidedAccessChecker = requireNativeModule('GuidedAccessChecker');
    emitter = new EventEmitter(GuidedAccessChecker);
}

export function isGuidedAccessEnabled(): boolean {
    if (Platform.OS !== 'ios') {
        return false;
    }
    // Optionally, you can expose this if available natively
    return GuidedAccessChecker.isGuidedAccessEnabled?.() ?? false;
}

export async function isGuidedAccessActive(): Promise<boolean> {
    return await GuidedAccessChecker.isGuidedAccessActive();
}

export function addGuidedAccessChangeListener(listener: (event: { isActive: boolean }) => void) {
    if (Platform.OS !== 'ios') {
        // No-op for non -iOS platforms
        return {
            remove: () => {},
        };
    }
    // Native event subscription
    // Expo Modules Core EventEmitter utilise addListener(eventName, listener)
    return emitter.addListener('onGuidedAccessChange', listener);
}

export default {
    isGuidedAccessEnabled,
    isGuidedAccessActive,
    addGuidedAccessChangeListener,
};