import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';

const RotolaScreen = ({navigation, campagna}) => {
    console.log(campagna)
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titoloStyle}>Rotola</Text>
            <Text style={styles.titoloStyle}>{campagna}</Text>
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
});

export default RotolaScreen;