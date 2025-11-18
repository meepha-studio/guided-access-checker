package expo.modules.guidedaccesschecker

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import android.util.Log // Importation pour les messages de log

class GuidedAccessCheckerModule : Module() {
    
    // Nom pour le logging
    private val TAG = "GuidedAccessChecker"
    
    override fun definition() = ModuleDefinition {
        
        Name("GuidedAccessChecker")

        // Définir les événements émis (doit correspondre au côté Swift/TS)
        Events("onGuidedAccessChange")

        // 1. Implémentation de la fonction isGuidedAccessActive()
        // Elle doit exister pour satisfaire le contrat JavaScript, même si elle retourne false.
        Function("isGuidedAccessActive") {
            Log.d(TAG, "isGuidedAccessActive appelé sur Android. Retourne toujours false.")
            // L'Accès Guidé (iOS) n'existe pas sur Android.
            return@Function false 
        }

        // 2. Implémentation des fonctions d'observation (pour les Events)
        // Elles doivent être implémentées pour que la partie iOS puisse émettre des événements.
        
        OnStartObserving {
            Log.d(TAG, "OnStartObserving appelé sur Android. Aucune écoute native démarrée.")
            // Sur Android, on ne démarre pas d'observateur natif. 
            // Si vous vouliez implémenter l'Épinglage d'Écran, ce serait ici.
        }

        OnStopObserving {
            Log.d(TAG, "OnStopObserving appelé sur Android. Aucune écoute native arrêtée.")
            // Pas d'observateur à arrêter.
        }
        
        // Note: Vous n'avez pas besoin d'une méthode Kotlin pour envoyer les événements
        // car le statut ne changera jamais pour cette API spécifique sur Android.
    }
}