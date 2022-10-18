import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');

    return (
    <View>
        <TextInput
            onChangeText={(text) => {
                setSearch(text);
                console.log(searchValue);
            }}
            value={searchValue}
            placeholder="Cerca Ristoranti"
        />
        <CarouselComponent></CarouselComponent>
    </View>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;