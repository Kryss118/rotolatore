import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import SearchInput from '../components/SearchInput';
import yelp from '../api/yelp';
import useSearch from '../hooks/useSearch';
import CarouselComponent from '../components/CarouselComponent';
import NetInfo from "@react-native-community/netinfo";

const HomeScreen = ({navigation}) => {

    const [searchValue, setSearch] = useState('');
    const [results, errorMessage, searchApi] = useSearch();
    const [refreshing, setRefreshing] = useState();

    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
          });
      });

      

    
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

    {/* visualizza messaggio di errore connessione qui, come sotto */}

       {errorMessage ? 
       <View style={styles.warning}>
        <Text style={styles.warningText}>Qualcosa è andato storto</Text>
        </View> 
        : null}
      

       <CarouselComponent navigation={navigation} title="Miglior Qualità Prezzo" results={filterByPrice('$')} />   
       <CarouselComponent navigation={navigation} title="Un po' costosi" results={filterByPrice('$$')}/>   
       <CarouselComponent navigation={navigation} title="Hai voglia di spendere?" results={filterByPrice('$$$' && '$$$$')}/>   
    </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff',
        paddingLeft: 20
    },
    warning: {
        backgroundColor: '#F2D53C',
        marginRight: 20,
        paddingHorizontal: 18,
        paddingVertical: 12
    },
    warningText: {
        color: '#ffffff',
        fontWeight: '700'
    }
});

export default HomeScreen;  