import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GruppoComponent from '../components/GruppoComponent';
import { campagne } from '../saves/data.json';

const GruppoScreen = ({navigation}) => {

    const [campagna, setCampagna] = useState("")
    const [idCampagna, setIdCampagna] = useState(campagne.length)
    const [visualizza, setVisualizza] = useState(true)
    const [personaggio, setPersonaggio] = useState([{camp: idCampagna, id: 1, nome: "", iniziativa: 0, vantaggio: false, immagine: "../assets/immagini/monster2.png"}])

    function salva1(){
        setVisualizza(false);
    }

    function aggiungi(){
        let nuovoId = (personaggio.length + 1)
        let temp = {camp: idCampagna, id: nuovoId, nome: "", iniziativa: 0, vantaggio: false, immagine: "../assets/immagini/monster2.png"}
        let temp2 = personaggio
        temp2.push(temp)
        setPersonaggio(temp2)
        console.log(personaggio)
    }

    return (
        <View style={styles.containerStyle}>
            <View>
                <Text style={styles.titoloStyle}>Crea Nuova Campagna</Text>
            </View>
            {visualizza===true &&
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Nome della Campagna"}
                    onChangeText={(newTerm)=> setCampagna(newTerm)}
                    value={campagna}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onEndEditing={(newTerm)=> setCampagna(campagna + newTerm)}
                />
                <Button
                    onPress={salva1}
                    title="SALVA"
                />
            </View>
            }
            {visualizza===false &&
            <View>
                <View>
                    <Text style={styles.titoloStyle}>{campagna}</Text>
                </View>
                <View>
                    <FlatList
                        data={personaggio}
                        extraData={(personaggio.length, personaggio.nome, personaggio.iniziativa, personaggio.vantaggio)}
                        renderItem={({item})=> (
                            <View>
                                <GruppoComponent item={item}/>
                            </View>
                        )}
                        keyExtractor={(item, key)=> item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View>
                    <Button
                        onPress={aggiungi}
                        title="Aggiungi PG"
                    />
                </View>
            </View>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    titoloStyle: {
        fontSize: 30,
        fontWeight:'700',
        textAlign: 'center',
        margin: 10,
        marginBottom: 25,
        color:'red'
    },
    containerStyle: {
        backgroundColor: '#000000'
    },
    textInput: {
        flex: 1,
        color: "#FF9999",
        textAlign:"center",
        fontSize:24
    }
});

export default GruppoScreen;