import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Main() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.welcomeMessage}> Buenos dias </Text>
          <View style={styles.saldoContenedor}>
              <Text style={styles.saldoMessage}>
                Usuarios operando
              </Text>
              <Text style={styles.saldoValue}>
                1.200.000.000
              </Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F6F6',
    },
    header:{
        width: "100%",
        height: 200,
        backgroundColor: "#4BAF8B",
        borderBottomRightRadius: 160
    },
    welcomeMessage: {
        fontSize: 22,
        marginTop: 46,
        marginLeft: 10
    },
    saldoMessage:{
        fontSize: 15,
        marginTop: 25,
        marginLeft: 15
    },
    saldoValue: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15
    }
  });
  