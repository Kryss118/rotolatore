import React from 'react';
import {
    View, 
    Text, 
    FlatList, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import ItemComponent from './ItemComponent';

const CarouselComponent = ({title, results, navigation}) => {

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            data={results}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => 
                navigation.navigate('Details', { title: item.name, image: item.image_url})}>
                    <ItemComponent item={item} />
                </TouchableOpacity>
        
    )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#C6B2B2',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        lineHeight: 41,
        fontWeight: '700',
        marginBottom: 10
    }
});

export default CarouselComponent;