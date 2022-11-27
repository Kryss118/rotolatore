import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { campagna, personaggi } from '../saves/data.json';

const RotolaScreen = ({route}) => {

    const [pg, setPg]=useState([]);

    useEffect(()=>{
        var temp=[]
        for (let i=0; i<personaggi.length; i++){
            if (personaggi[i].camp===Number(route.params.campId)){
                temp.push({id: personaggi[i].id, nome: personaggi[i].nome, iniziativa: personaggi[i].iniziativa, vantaggio: personaggi[i].vantaggio, tiro:0})
            }
        }
        temp.push({id: personaggi.length, nome: "Mostro 1", iniziativa: 0, vantaggio: "false", tiro:0})
        temp.push({id: personaggi.length, nome: "Mostro 2", iniziativa: 0, vantaggio: "false", tiro:0})
        setPg(temp)
    },[])

    function dado(){
        for (let i=0; i<pg.length; i++){
            setPg(pg[i].tiro=(Math.floor(Math.random()*20)+1))
        }
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titoloStyle}>Rotola {route.params.campagna}</Text>
            <ScrollView>
                <FlatList
                    data={pg}
                    renderItem={({item})=> (
                        <View style={styles.rowStyle}>
                            <Text style={styles.testoStyle}>{item.nome} {item.iniziativa}</Text>
                            {item.tiro>0&&
                            <Text style={styles.testoStyle}>{item.tiro}</Text>}
                        </View>
                    )}
                    keyExtractor={(item, key)=> item.id}
                />
            </ScrollView>
            <View>
                <Button
                    onPress={() => (console.log(pg.length), dado())}
                    title="ROTOLA"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titoloStyle: {
        fontSize: 30,
        fontWeight:'700',
        textAlign: 'center',
        margin: 20,
        marginBottom: 50,
        color:'red'
    },
    containerStyle: {
        backgroundColor: '#000000'
    },
    testoStyle:{
        color: 'red',
        fontSize: 20,
        padding: 10
      },
    rowStyle:{
        flexDirection:"row"
    }
});

export default RotolaScreen;