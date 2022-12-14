import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, CheckBox } from 'react-native';
import { campagne, personaggi } from '../saves/data.json';

const GruppoScreen = ({ navigation }) => {

    const [campagna, setCampagna] = useState("")
    const [idCampagna, setIdCampagna] = useState(campagne.length)
    const [idPg, setIdPg] = useState(personaggi.length+1)
    const [visualizza, setVisualizza] = useState(true)
    const [personaggio, setPersonaggio] = useState([{ camp: idCampagna, id: idPg, nome: "", iniziativa: 0, vantaggio: false, immagine: "../assets/immagini/monster2.png" }])
    const [variazione, setVariazione] = useState(0)

    function salva1() {
        setVisualizza(false);
    }

    function aggiungi() {
        setVariazione(variazione + 1)
        let nuovoId = (personaggio.length + idPg)
        let temp = { camp: idCampagna, id: nuovoId, nome: "", iniziativa: 0, vantaggio: false, immagine: "../assets/immagini/monster2.png" }
        let temp2 = personaggio
        temp2.push(temp)
        setPersonaggio(temp2)
        console.log(personaggio)
    }

    function salvaTutto(){
        campagne.push({id: idCampagna, nome: campagna})
        for (let i = 0; i<personaggio.length; i++){
            personaggi.push(personaggio[i])
        }
        navigation.navigate('Scegli')
        console.log(campagne)
        console.log(personaggi)
    }

    return (
        <View style={styles.containerStyle}>
            <View>
                <Text style={styles.titoloStyle}>Crea Nuova Campagna</Text>
            </View>
            {visualizza === true &&
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder={"Nome della Campagna"}
                        onChangeText={(newTerm) => setCampagna(newTerm)}
                        value={campagna}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        onEndEditing={(newTerm) => setCampagna(campagna + newTerm)}
                    />
                    <Button
                        onPress={salva1}
                        title="PROCEDI"
                        disabled={campagna === ""}
                    />
                </View>
            }
            {visualizza === false &&
                <View>
                    <View>
                        <Text style={styles.titoloStyle}>{campagna}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={personaggio}
                            extraData={variazione}
                            renderItem={({ item }) => (
                                <View style={styles.rowStyle}>
                                    <View style={styles.retangolo}>
                                        <Text style={styles.testoStyle}>PG {item.id}</Text>
                                    </View>
                                    <View style={styles.retangoloNome}>
                                        <TextInput
                                            style={styles.textInput2}
                                            placeholder={"Nome"}
                                            onChangeText={(newTerm) => item.nome = (newTerm)}
                                            autoCorrect={false}
                                            autoCapitalize={'none'}
                                            onEndEditing={(newTerm) => item.nome = (item.nome + newTerm)}
                                        />
                                    </View>
                                    <View style={styles.retangoloNome}>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.testoStyle}>bonus: {item.iniziativa}</Text>
                                            <View style={styles.rowStyle2}>
                                                <Button
                                                    onPress={() => ((item.iniziativa = item.iniziativa + 1), setVariazione(variazione+1))}
                                                    title="+"
                                                />
                                                <Button
                                                    onPress={() => ((item.iniziativa = item.iniziativa - 1), setVariazione(variazione+1))}
                                                    title="-"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.retangolo}>
                                        <CheckBox
                                            value={item.vantaggio}
                                            onValueChange={() => {
                                                if (item.vantaggio === false) {
                                                    item.vantaggio = true
                                                } else {
                                                    item.vantaggio = false
                                                }
                                                setVariazione(variazione+1)
                                            }}
                                        />
                                        <Text style={styles.testoStyle}>{String(item.vantaggio)}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, key) => item.id}
                            showsVerticalScrollIndicator={false}
                            refreshing={true}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={aggiungi}
                            title="Aggiungi PG"
                        />
                        <Button
                            onPress={salvaTutto}
                            title="SALVA TUTTO"
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
        fontWeight: '700',
        textAlign: 'center',
        margin: 10,
        marginBottom: 25,
        color: 'red'
    },
    rowStyle:{
        flexDirection:"row",
        alignSelf:"center"
    },
    rowStyle2:{
        flexDirection:"column",
        alignSelf:"center"
    },
    retangolo:{
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        width:60,
        height:80
    },
    retangoloNome:{
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        width:120,
        height:80
    },
    testoStyle:{
        color: 'red',
        fontSize: 14,
        padding: 5,
        margin: 5,
        textAlign:"center"
      },
    containerStyle: {
        backgroundColor: '#000000'
    },
    textInput: {
        flex: 1,
        color: "#FF9999",
        textAlign: "center",
        fontSize: 24
    },
    textInput2: {
        flex: 1,
        color: "#FF9999",
        textAlign:"center",
        fontSize:20
    }
});

export default GruppoScreen;