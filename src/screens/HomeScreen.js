import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import SearchInput from '../components/SearchInput';
import yelp from '../api/yelp';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setError] = useState(false);

    const searchApi = async (value) => {
        try {
            const response = await yelp.get('/search', {params: {
                term: value,
                location: 'Italy',
                limit: 50
            }});
            setResults(response.data.businesses);
            setError(false)
        }
        catch(e){
            setError(true);
        }
    }

    //TODO: implementazione hook

    useEffect(() => {
        searchApi(null);
    }, []);


    return (
    <View style={styles.containerStyle}>
       <SearchInput 
            placeholder={"Cerca Ristoranti"}
            value={searchValue}
            onChange={(newTerm) => setSearch(newTerm)}
            onEnd={() => searchApi(searchValue)}
       />
       {errorMessage ? <Text>Qualcosa è andato storto</Text> : null}
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