import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetalleAcciones from './detalleAcciones';
import Footer from './footer';
import Header from './header';

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menuContainer}>
        <DetalleAcciones />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    backgroundColor: '#284545',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
  },
});
