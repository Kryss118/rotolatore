import { Text, StyleSheet, View, Image } from 'react-native';

const PgComponent = ({item}) => {

    /// le immagini non si vedono ancora (dal file json)

    let pippo = "(v)"
    return (
        <View style={styles.rowStyle}>
            <View style={styles.retangolo}>
                <Image style={styles.image} source={{uri: item.immagine}}></Image>
            </View>
            <View style={styles.retangoloNome}>
                <Text style={styles.testoStyle}>{item.nome} {item.vantaggio === "true" && pippo}</Text>
                
            </View>
            <View style={styles.retangolo}>
                <Text style={styles.testoStyle}>{item.iniziativa}</Text>
            </View>
            <View style={styles.retangolo}>
                <Text style={styles.testoStyle}>{item.tiro}</Text>
            </View>
            <View style={styles.retangolo}>
                <Text style={styles.testoStyle}>{item.totale}</Text>
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
    image: {
        width: 60,
        height: 60
    }
});

export default PgComponent;