import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 


const SearchInput = () => {
    return (
        <View style={styles.inputContainer}>
            <Fontisto 
                style={styles.inputIcon} 
                name="search" size={18} 
                color="#848488" 
            />
            <TextInput 
                style={styles.textInput}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#EFEFF0',
        height: 36,
        borderRadius: 10,
        margin: 16,
        flexDirection: 'row'
    },
    inputIcon: {
        alignSelf: 'center',
        margin: 10
    },
    textInput: {
        flex: 1
    }
});

export default SearchInput;