import { Text, StyleSheet, View, Image, Button } from 'react-native';

const GruppoComponent = ({item}) => {


    return (
        <View style={styles.rowStyle}>
            <View  style={styles.retangolo}>
                <Text style={styles.testoStyle}>PG {item.id}</Text>
            </View>
            <View  style={styles.retangoloNome}>
                <Text style={styles.testoStyle}>{item.nome}</Text>
            </View>
            <View  style={styles.retangoloNome}>
                <Text style={styles.testoStyle}>bonus: {item.iniziativa}</Text>
                <View>
                    <Button
                        onPress={()=> item.iniziativa = item.iniziativa + 1}
                        title="+"
                    />
                    <Button
                        onPress={()=> item.iniziativa = item.iniziativa - 1}
                        title="-"
                    />
                </View>
            </View>
            <View  style={styles.retangolo}>
                <Text style={styles.testoStyle}>{item.vantaggio}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    testoStyle:{
        color: 'red',
        fontSize: 14,
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
    },
    textInput: {
        flex: 1,
        color: "#FF9999",
        textAlign:"center",
        fontSize:24
    }
});

export default GruppoComponent;