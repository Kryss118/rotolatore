import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import SearchInput from '../components/SearchInput';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');

    return (
    <View style={styles.containerStyle}>
       <SearchInput />
        <CarouselComponent></CarouselComponent>
    </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff'
    }
});

export default HomeScreen;