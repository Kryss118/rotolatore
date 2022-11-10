import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ItemComponent = ({item}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image_url}} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.infoMeta}>
                    <Text style={styles.label}>{item.rating} Stelle,</Text> 
                    <Text style={styles.label}> {item.review_count} Recensioni</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    },
    image: {
        width: 200,
        height: 130
    },
    infoContainer: {
        marginTop: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22
    },
    infoMeta: {
       flexDirection: 'row',
    },
    label: {
        fontWeight: '400', 
        fontSize: 12,
        lineHeight: 16,
        color: 'rgb(60, 60, 67,)' ,
        opacity: 0.6
    }
});

export default ItemComponent;