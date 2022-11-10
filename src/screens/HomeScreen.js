import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import SearchInput from '../components/SearchInput';
import yelp from '../api/yelp';
import useSearch from '../hooks/useSearch';
import CarouselComponent from '../components/CarouselComponent';

const HomeScreen = () => {
    const [searchValue, setSearch] = useState('');
    const [results, errorMessage, searchApi] = useSearch();
    const [refreshing, setRefreshing] = useState();

      

    
    const filterByPrice = (price) => {
            return results.filter(result => {
                return result.price === price;
        });
    }

    const filterByRating = (min, max) => {
        console.log(results)
        return results.filter(result => {
            return result.rating > min && result.rating <= max
        })
    }

    return (
        <View>
    <ScrollView style={styles.containerStyle} 
                refreshControl={<RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={() => {
                        searchApi('')
                        setRefreshing(false)
        }}/>}>
       <SearchInput 
            placeholder={"Cerca Ristoranti"}
            value={searchValue}
            onChange={(newTerm) => setSearch(newTerm)}
            onEnd={() => searchApi(searchValue)}
       />
       {errorMessage ? <Text>Qualcosa è andato storto</Text> : null}
      

       <CarouselComponent title="Miglior Qualità Prezzo" results={filterByPrice('$')} />   
       <CarouselComponent title="Un po' costosi" results={filterByPrice('$$')}/>   
       <CarouselComponent title="Hai voglia di spendere?" results={filterByPrice('$$$' && '$$$$')}/>   
    </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff',
        paddingLeft: 20
    }
});

export default HomeScreen;  