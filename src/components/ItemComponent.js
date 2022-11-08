import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ItemComponent = ({item}) => {
    console.log(item.image_url)
    return (
        <View>
            <Image  />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ItemComponent;