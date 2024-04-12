import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Main from './src/componentes/main.jsx';

export default function App() {
  return (
    <Main />
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
