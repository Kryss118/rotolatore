import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const DetailScreen = ({route}) => {
    console.log(route)
    return(
        <View>
        <Image style={styles.image} source={{uri: route.params.image}}/>
    </View>
    ) 
};

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400
    }
});

export default DetailScreen;