import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DetalleAcciones = () => {
  const stockDetailData = {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    dividends: 'Pago de dividendos: $0.82 por acción',
    activeShareholders: 'Accionistas Activos: 10,000',
    activeBalance: 'Saldo Activo: $1,000,000',
    behavior: 'Comportamiento: Estable',
    description: 'Apple Inc. es una empresa multinacional estadounidense que diseña y produce equipos electrónicos, software y servicios en línea.',
  };

  const { symbol, companyName, dividends, activeShareholders, activeBalance, behavior, description } = stockDetailData;

  const handleBuy = () => {
    // Acción al hacer clic en comprar
    console.log('Comprar acción:', symbol);
  };

  const handleSell = () => {
    // Acción al hacer clic en vender
    console.log('Vender acción:', symbol);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{companyName} ({symbol})</Text>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Descripción:</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dividendos</Text>
          <Text>{dividends}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accionistas Activos</Text>
          <Text>{activeShareholders}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saldo Activo</Text>
          <Text>{activeBalance}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comportamiento</Text>
          <Text>{behavior}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBuy}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSell}>
            <Text style={styles.buttonText}>Vender</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284545',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#284545',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetalleAcciones;
