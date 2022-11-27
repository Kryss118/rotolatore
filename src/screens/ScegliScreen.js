import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { campagne } from '../saves/data.json';

const ScegliScreen = ({navigation}) => {
    const [dati, setDati]=useState(campagne)

    /* ELIMINO LA RIGA BIANCA */
    useEffect(()=>{
        setDati((current) => current.filter((dati) => dati.id !== 0));
    },[])

    return (
        <View style={styles.containerStyle}>
            <View>
                <Text style={styles.titoloStyle}>Scegli la Campagna</Text>
            </View>
                <ScrollView>
                    <FlatList
                        data={dati}
                        renderItem={({item})=> (
                            <TouchableOpacity
                                style={styles.campagneStyle}
                                onPress={()=> navigation.navigate('Rotola', {campagna: item.nome, campId: item.id})}>
                                    <Text style={styles.testoStyle}>{item.nome}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, key)=> item.id}
                    />
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titoloStyle: {
        fontSize: 30,
        fontWeight:'700',
        textAlign: 'center',
        margin: 20,
        marginBottom: 50,
        color:'red'
    },
    containerStyle: {
        backgroundColor: '#000000'
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

export default ScegliScreen;