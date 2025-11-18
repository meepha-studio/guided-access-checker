import ExpoModulesCore
import UIKit  // N'oubliez pas d'importer UIKit pour accéder à UIAccessibility

public class GuidedAccessCheckerModule: Module {
  public func definition() -> ModuleDefinition {
    // 1. Le nom du module
    Name("GuidedAccessChecker")

    // 2. Définir les événements que ce module peut émettre (nécessaire pour la détection en temps réel)
    Events("onGuidedAccessChange")

    // 3. Fonction pour vérifier le statut une seule fois (comme avant)
    Function("isGuidedAccessActive") { () -> Bool in
      if #available(iOS 9.0, *) {
        return UIAccessibility.isGuidedAccessEnabled
      } else {
        return false
      }
    }

    // 4. Lifecycle Hook : Écouter la notification iOS
    OnStartObserving {
      // Le nom de la notification système émise par iOS lorsque l'Accès Guidé change
      let notificationName = UIAccessibility.guidedAccessStatusDidChangeNotification

      // On s'enregistre pour écouter cette notification
      NotificationCenter.default.addObserver(
        self,
        selector: #selector(self.guidedAccessStatusDidChange),
        name: notificationName,
        object: nil
      )
    }

    // 5. Lifecycle Hook : Arrêter d'écouter lorsque le composant JS se désabonne
    OnStopObserving {
      // On retire l'observateur du NotificationCenter pour éviter les fuites de mémoire.
      NotificationCenter.default.removeObserver(self)
    }
  }

  // 6. La méthode appelée par la notification iOS
  @objc func guidedAccessStatusDidChange() {
    // 7. On récupère le statut actuel
    let isActive: Bool = {
      if #available(iOS 9.0, *) {
        return UIAccessibility.isGuidedAccessEnabled
      }
      return false
    }()

    // 8. On émet un événement vers React Native (JavaScript)
    // L'événement porte le nom "onGuidedAccessChange" (défini dans Events())
    // et transmet un dictionnaire avec le statut.
    sendEvent(
      "onGuidedAccessChange",
      [
        "isActive": isActive
      ])
  }
}