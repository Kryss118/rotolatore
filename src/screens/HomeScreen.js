import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { campagne } from '../saves/data.json';

const HomeScreen = ({ navigation }) => {
    const [titolo, setTitolo] = useState('ROTOLATORE INIZIATIVA');
    const [abilitaPuls, setAbilitaPuls] = useState(false)
    
    const controlla = ()=> {
      if (campagne.length===1){
        alert(campagne[0].nome)
    } else {
      navigation.navigate('Scegli')
    }}

    return (
        <View style={styles.pageStyle}>
            <Text style={styles.titoloStyle}>{titolo}</Text>
            <View>
                <TouchableOpacity
                  style={styles.campagneStyle}
                  onPress={()=> navigation.navigate('Gruppo')}>
                    <Text style={styles.testoStyle}>Crea Nuovo Gruppo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.campagneStyle}
                  disabled={abilitaPuls}
                  onPress={()=> controlla()}>
                    <Text style={styles.testoStyle}>Scegli Campagna</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#000000',
    },
    titoloStyle: {
        fontSize: 30,
        fontWeight:'700',
        textAlign: 'center',
        margin: 20,
        marginBottom: 50,
        color:'red'
      },
      testoStyle:{
        color: 'red',
        fontSize: 20,
        padding: 10
      },
      campagneStyle:{
        margin: 5,
        color: 'red',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 25,
        borderWidth: 3,
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 100,
        height:50
      }
});

export default HomeScreen;  