import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import SearchInput from '../components/SearchInput';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');

    return (
    <View style={styles.containerStyle}>
       <SearchInput 
            placeholder={"Cerca Ristoranti"}
            value={searchValue}
            onChange={(newTerm) => setSearch(newTerm)}
            onEnd={() => console.log('Ho scritto')}
       />
       <Text>{searchValue}</Text>
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