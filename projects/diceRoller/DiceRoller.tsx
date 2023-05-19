import React, { useCallback, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Pressable } from 'react-native';

import D1 from  '../../assets/dice1.png';
import D2 from  '../../assets/dice2.png';
import D3 from  '../../assets/dice3.png';
import D4 from  '../../assets/dice4.png';
import D5 from  '../../assets/dice5.png';
import D6 from  '../../assets/dice6.png';

const styles = StyleSheet.create({
 
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 15,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 20,
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
})

const DiceRoller = () => {

    const [randomeDiceOne, setRandomDiceOne] = useState(D1)
    const [randomeDiceTwo, setRandomDiceTwo] = useState(D1)

    const randomDiceHandler = useCallback(() => {
        let diceOne  = Math.floor(Math.random() * 6 + 1)
        let diceTwo  = Math.floor(Math.random() * 6 + 1)

        switch (diceOne) {
            case 1:
                setRandomDiceOne(D1)
                break;
            case 2:
                setRandomDiceOne(D2)
                break;      
            case 3:
                setRandomDiceOne(D3)
                break;       
            case 4:
                setRandomDiceOne(D4)
                break;       
            case 5:
                setRandomDiceOne(D5)
                break;       
            case 6:
                setRandomDiceOne(D6)
                break;
            default:
                break;
        }

        switch (diceTwo) {
            case 1:
                setRandomDiceTwo(D1)
                break;
            case 2:
                setRandomDiceTwo(D2)
                break;      
            case 3:
                setRandomDiceTwo(D3)
                break;       
            case 4:
                setRandomDiceTwo(D4)
                break;       
            case 5:
                setRandomDiceTwo(D5)
                break;       
            case 6:
                setRandomDiceTwo(D6)
                break;
            default:
                break;
        }
    },[])

  return (
    <View style={styles.container}>
        <Pressable onPress={randomDiceHandler}>
        <Image style={styles.image} source={randomeDiceOne}/>
        {/* <Image style={styles.image} source={randomeDiceTwo}/> */}
        {/* <Text style={styles.text}>Play</Text> */}
        </Pressable>
    </View>
  )
}

export default DiceRoller