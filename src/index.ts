// Implémentation web factice pour GuidedAccessChecker
export function isGuidedAccessEnabled() {
    // Toujours désactivé sur le web
    return false;
}

export function isGuidedAccessActive() {
    // Toujours désactivé sur le web
    return Promise.resolve(false);
}

export function addGuidedAccessChangeListener(listener: (event: { isActive: boolean }) => void) {
    // Sur le web, cette fonctionnalité n'est pas prise en charge.
    // Nous retournons un objet avec une méthode remove vide pour éviter les erreurs.
    return {
        remove: () => {
            // Rien à nettoyer sur le web
        },
    };
}

export default {
    isGuidedAccessEnabled,
    isGuidedAccessActive,
    addGuidedAccessChangeListener,
};