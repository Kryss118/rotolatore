import React from 'react';
import {
    View, 
    Text, 
    FlatList, 
    StyleSheet
} from 'react-native'
import ItemComponent from './ItemComponent';

const CarouselComponent = () => {
    return (
        <View>
        <Text>Lista</Text>
        <ItemComponent></ItemComponent>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CarouselComponent;