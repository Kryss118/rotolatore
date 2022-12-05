import { Text, StyleSheet, View, Image } from 'react-native';

const GruppoComponent = ({item}) => {
    
    return (
        <View>
            <Text style={styles.testoStyle}>STICAZZI</Text>
            <View style={styles.rowStyle}>
                <View style={styles.retangolo}>
                    <Image style={styles.image} source={ item.immagine }/>
                </View>
                <View style={styles.retangoloNome}>
                    <Text style={styles.testoStyle}>{item.nome}</Text>
                </View>
                <View style={styles.retangolo}>
                    <Text style={styles.testoStyle}>{item.iniziativa}</Text>
                </View>
                <View style={styles.retangolo}>
                    <Text style={styles.testoStyle}>{item.vantaggio}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    testoStyle:{
        color: 'red',
        fontSize: 20,
        padding: 5,
        margin: 5,
        textAlign:"center"
      },
    rowStyle:{
        flexDirection:"row",
        alignSelf:"center"
    },
    retangolo:{
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        width:60,
        height:60
    },
    retangoloNome:{
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        width:120,
        height:60
    },
    image:{
        width: 60,
        height: 60
    }
});

export default GruppoComponent;