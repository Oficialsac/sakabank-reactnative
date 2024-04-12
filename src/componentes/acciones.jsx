import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
const AccionCard = () => {
    const stocks = [
      { symbol: 'AAPL', companyName: 'Apple Inc.', latestPrice: 145.50, change: 2.75, changePercent: 1.93 },
      { symbol: 'GOOGL', companyName: 'Alphabet Inc.', latestPrice: 2675.78, change: -10.43, changePercent: -0.39 },
      { symbol: 'MSFT', companyName: 'Microsoft Corporation', latestPrice: 329.24, change: 1.35, changePercent: 0.41 },
      { symbol: 'AMZN', companyName: 'Amazon.com Inc.', latestPrice: 3412.44, change: -25.16, changePercent: -0.73 },
      { symbol: 'AAPL', companyName: 'Apple Inc.', latestPrice: 145.50, change: 2.75, changePercent: 1.93 },
      { symbol: 'GOOGL', companyName: 'Alphabet Inc.', latestPrice: 2675.78, change: -10.43, changePercent: -0.39 },
      { symbol: 'MSFT', companyName: 'Microsoft Corporation', latestPrice: 329.24, change: 1.35, changePercent: 0.41 },
      { symbol: 'AMZN', companyName: 'Amazon.com Inc.', latestPrice: 3412.44, change: -25.16, changePercent: -0.73 },
    ];
  
    return (
      <ScrollView>
        <Text style={styles.textAcciones}> Acciones en el mercado del pais </Text>
        {stocks.map((stock, index) => (
            <TouchableOpacity>
                <View key={index} style={styles.card}>
                    <Text style={styles.symbol}>{stock.symbol}</Text>
                    <Text style={styles.companyName}>{stock.companyName}</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Último Precio: ${stock.latestPrice}</Text>
                        <Text style={[styles.infoText, { color: stock.change >= 0 ? 'green' : 'red' }]}>
                            Cambio: {stock.change >= 0 ? '+' : ''}${stock.change} ({stock.changePercent}%)
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
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
  textAcciones:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    padding: 20,
    justifyContent: 'center'
  }
});

export default AccionCard;