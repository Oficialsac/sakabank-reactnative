import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleEmailChange = (text) => {setEmail(text)};
    
    const handlePasswordChange = (text) => {setPassword(text);};
    
    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    
        alert("Ingresaste melo, la buena")
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Text style={styles.appName}>SAKABANK</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        onChangeText={handleEmailChange}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        onChangeText={handlePasswordChange}
                        value={password}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>  
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#284545',
        flex: 1,
    },
    backgroundContainer:{
        width: "100%",
        height: "80%",
        backgroundColor: "#4BAF8B",
        borderBottomRightRadius: 160,
        justifyContent: "center",
    },
    appName: {
        width: "100%",
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: "22%",
        color: 'white',
    },
    formContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'white',
    },
    button: {
        backgroundColor: '#284545',
        marginTop: 25,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }}
);
  