import React from 'react';
import {
    View, 
    Text, 
    FlatList, 
    StyleSheet
} from 'react-native'
import ItemComponent from './ItemComponent';

const CarouselComponent = ({title, results}) => {
    return (
        <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            data={results}
            renderItem={({item}) => <ItemComponent item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
        />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        lineHeight: 41,
        fontWeight: '700',
    }
});

export default CarouselComponent;