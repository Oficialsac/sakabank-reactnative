import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.welcomeMessage}> Buenos dias Stiven </Text>
          <View style={styles.saldoContenedor}>
              <View style={styles.saldoEnActivos}>
                <Text style={styles.saldoMessage}>
                  Saldo acciones
                </Text>
                <Text style={styles.saldoValue}>
                  $ 1.200.000.000
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>alert("Hola")}>
                        <Text style={styles.buttonText}>Depositar</Text>
                    </TouchableOpacity>
              </View>
              <View style={styles.saldoDisponible}>
                <Text style={styles.saldoMessage}>
                  Disponible 
                </Text>
                <Text style={styles.saldoValue}>
                  $ 90.000.000
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>alert("Hola")}>
                        <Text style={styles.buttonText}>Retirar</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#284545',
    },
    header:{
        width: "100%",
        height: 200,
        backgroundColor: "#4BAF8B",
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
    },
    welcomeMessage: {
        fontSize: 22,
        marginTop: 46,
        marginLeft: 10,
        color: "white"
    },
    saldoContenedor:{
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    saldoMessage:{
        fontSize: 14,
        marginTop: 25,
        color: "white"
    },
    saldoValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    button: {
        width: 150,
        backgroundColor: '#284545',
        padding: 10,
        borderRadius: 5,
        marginTop: 3,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    }
  });