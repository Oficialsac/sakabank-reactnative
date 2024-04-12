import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.activeOption}
        onPress={() => alert("Menu")}
      >
        <Text style={styles.optionText}>Menú</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.activeOption}
        onPress={() => alert("Acciones")}
      >
        <Text style={styles.optionText}>Acciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.activeOption}
        onPress={() => alert("Perfil")}
      >
        <Text style={styles.optionText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4BAF8B',
    height: 60,
    position: 'absolute', // Lo colocamos en la parte inferior
    bottom: 0, // Lo anclamos al fondo
    left: 0,
    right: 0,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  activeOption: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
});

export default Footer;
