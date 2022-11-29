import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PgComponent from '../components/PgComponent';
import { campagna, personaggi } from '../saves/data.json';

const RotolaScreen = ({route}) => {

    const [pg, setPg]=useState([]);

    useEffect(()=>{
        var temp=[]
        for (let i = 0; i < personaggi.length; i++){
            if (personaggi[i].camp === Number(route.params.campId)){
                temp.push({id: personaggi[i].id, nome: personaggi[i].nome, iniziativa: personaggi[i].iniziativa, vantaggio: personaggi[i].vantaggio, tiro:0, totale:0})
            }
        }
        temp.push({id: personaggi.length, nome: "Nemico 1", iniziativa: 0, vantaggio: "false", tiro:0, totale:0});
        temp.push({id: personaggi.length+1, nome: "Nemico 2", iniziativa: 0, vantaggio: "false", tiro:0, totale:0});
        setPg(temp);
    },[])

    ///devo implementare il vantaggio
    /// L'ERRORE E' QUI !!!!
    function dado(){
        for (let i=0; i<pg.length; i++){
            let temp = Math.floor(Math.random()*20)+1;
            setPg(pg[i].tiro = temp);
            let tot = pg[i].iniziativa + temp
            setPg(pg[i].totale = tot);
        }
        console.log(pg)
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titoloStyle}>Rotola {route.params.campagna}</Text>
            <View>
                <FlatList
                    data={pg}
                    extraData={pg.totale}
                    renderItem={({item})=> (
                        <View>
                            <PgComponent item={item}/>
                        </View>
                    )}
                    keyExtractor={(item, key)=> item.id}
                />
                
            </View>
            <View>
                <Button
                    onPress={() => dado()}
                    title="ROTOLA"
                />
                <Button
                    onPress={() => console.log(pg)}
                    title="VISUALIZZA"
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