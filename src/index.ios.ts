// Importez NativeEventSubscription depuis 'react-native'
import { NativeEventSubscription } from 'react-native';
import { requireNativeModule, EventEmitter } from 'expo-modules-core';

// 1. Charger le module natif
const GuidedAccessChecker = requireNativeModule('GuidedAccessChecker');
// 2. Créer l'émetteur d'événements pour ce module
const emitter = new EventEmitter(GuidedAccessChecker);

// Interface pour le payload de l'événement
export type GuidedAccessEvent = {
  isActive: boolean;
};

// 3. Fonction pour obtenir le statut (inchangée)
export async function isGuidedAccessActive(): Promise<boolean> {
  return await GuidedAccessChecker.isGuidedAccessActive();
}

// 4. Fonction pour s'abonner aux changements
export function addGuidedAccessChangeListener(listener: (event: GuidedAccessEvent) => void): NativeEventSubscription {

  // Appliquez l'assertion de type 'any' à la méthode addListener elle-même.
  // Cela contourne les problèmes de contraintes de type générique (never) 
  // car le nom de l'événement est défini dynamiquement côté natif.
  return (emitter.addListener as any)('onGuidedAccessChange', listener as any);
}