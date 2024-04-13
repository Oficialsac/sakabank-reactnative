import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Paises(){
  const countries = [
    { name: 'Estados unidos', image: require('../../assets/banderasPaises/usa.png') },
    { name: 'Alemania', image: require('../../assets/banderasPaises/german.png') },
    { name: 'España', image: require('../../assets/banderasPaises/spain.png') },
  ];

  return (
    <View style={styles.container}>
        <Text  style={styles.seleccionText}>Seleccione el pais:</Text>
        <View style={styles.paisesContainer}>
            {countries.map((country, index) => (
                <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => alert(country.name)}
                >
                <Image source={country.image} style={styles.image} />
                <Text style={styles.buttonText}>{country.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        marginTop: '40%',
    },
    paisesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    buttonText: {
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    seleccionText:{
        alignItems: 'center',
        width: '80%',
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
        padding: 15,
    }
});


