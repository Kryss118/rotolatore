import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import SearchInput from '../components/SearchInput';
import yelp from '../api/yelp';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {params: {
            term: searchValue,
            location: 'Italy',
            limit: 50
        }});
        setResults(response.data.businesses);
    }

    return (
    <View style={styles.containerStyle}>
       <SearchInput 
            placeholder={"Cerca Ristoranti"}
            value={searchValue}
            onChange={(newTerm) => setSearch(newTerm)}
            onEnd={searchApi}
       />
       <Text>La ricerca ha prodotto {results.length} risultati</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff'
    }
});

export default HomeScreen;