import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { campagne } from '../saves/data.json';

const ScegliScreen = ({navigation}) => {

    return (
        <View style={styles.containerStyle}>
            <View>
                <Text style={styles.titoloStyle}>Scegli Gruppo</Text>
            </View>
            <View style={styles.containerStyle}>
                <FlatList
                    data={campagne}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>(
                        <TouchableOpacity
                            style={styles.campagneStyle}
                            /*onPress={()=> scegliCampagna({nome: item.nome})}*/>
                            <Text style={styles.testoStyle}>{item.campagne.nome}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, key) => item.campagne.id}
            
                />
            </View>
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