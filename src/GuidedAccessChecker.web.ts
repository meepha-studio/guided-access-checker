// Implémentation web factice pour GuidedAccessChecker
// Cette version évite les erreurs d'import sur le web et retourne des valeurs par défaut

export function isGuidedAccessEnabled() {
  // Toujours désactivé sur le web
  return false;
}

export default {
  isGuidedAccessEnabled,
};
