import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { isGuidedAccessActive, addGuidedAccessChangeListener } from 'guided-access-checker';

export default function AppLockStatus() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 1. Charger l'état initial
    isGuidedAccessActive().then(setIsActive);

    // 2. S'abonner aux mises à jour en temps réel
    const subscription = addGuidedAccessChangeListener((event) => {
      console.log('Changement détecté ! Nouveau statut:', event.isActive);
      setIsActive(event.isActive);
    });

    // 3. Nettoyage : retirer l'abonnement lorsque le composant est démonté
    return () => subscription.remove();
  }, []); // Le tableau vide assure que l'effet s'exécute seulement au montage/démontage

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Statut de l'Accès Guidé :
      </Text>
      <Text style={[styles.valueText, isActive ? styles.active : styles.inactive]}>
        {isActive ? 'VERROUILLÉ' : 'DÉVERROUILLÉ'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    fontSize: 20,
    marginBottom: 10,
  },
  valueText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  active: {
    color: 'green',
  },
  inactive: {
    color: 'red',
  },
});