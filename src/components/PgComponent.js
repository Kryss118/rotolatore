import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';

const PgComponent = ({item}) => {

    return (
        <View style={styles.rowStyle}>
            <Text style={styles.testoStyle}>{item.nome}</Text>
            <Text style={styles.testoStyle}>{item.iniziativa}</Text>
            <Text style={styles.testoStyle}>{item.tiro}</Text>
            <Text style={styles.testoStyle}>{item.totale}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    testoStyle:{
        color: 'red',
        fontSize: 20,
        padding: 10,
        margin: 20
      },
    rowStyle:{
        flexDirection:"row"
    }
});

export default PgComponent;