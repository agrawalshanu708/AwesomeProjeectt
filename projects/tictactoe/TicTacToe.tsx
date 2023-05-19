import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Snackbar from 'react-native-snackbar'
import ConfettiCannon from 'react-native-confetti-cannon';


const styles  = StyleSheet.create({
   container: {
    margin: 20,
    flex: 1
   },

   header_container: {
    marginTop: 20
   },

   header_text: {
       fontSize: 30,
       textAlign: 'center',
       color: '#000000',
   },

   game_view_container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 50
   },
   
   button: {
    width: '33%',
    height: 70,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
   },
   button_text:{
      fontSize: 20
   },

   turn_message: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 4
   },

   win_text: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'beige'
   },

   reload_button:{
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10
   },

   reload_button_text:{
    fontSize: 20,
   }

})

let ticTacToeValue = [
    {id: 1, value: 'click'},
    {id: 2, value: 'click'},
    {id: 3, value: 'click'},
    {id: 4, value: 'click'},
    {id: 5, value: 'click'},
    {id: 6, value: 'click'},
    {id: 7, value: 'click'},
    {id: 8, value: 'click'},
    {id: 9, value: 'click'},
]

const TicTacToe = () => {

    const [values, setValues] = useState(ticTacToeValue)
    const [isCrossed, setIsCrossed] = useState(false)
    const [winMessage, setWinMessage] = useState({
        isWinDeclared: false,
        message: ''
    })


const winCriteria = () => {
        if(values[0].value === values[1].value  && 
            values[0].value === values[2].value && values[0].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message: `${values[0].value} won`});
            } else if (values[3].value === values[4].value  && 
                values[3].value === values[5].value && values[3].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message:  `${values[3].value} won`})
            }  else if (values[6].value === values[7].value  && 
                values[6].value === values[8].value && values[6].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message:  `${values[6].value} won`})
            }   else if (values[0].value === values[3].value  && 
                values[0].value === values[6].value && values[0].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message:  `${values[0].value} won`})
            }  else if (values[1].value === values[4].value  && 
                values[1].value === values[7].value && values[1].value !== 'click') {
                setWinMessage( { isWinDeclared: true, message: `${values[1].value} won`})
            }   else if (values[2].value === values[5].value  && 
                values[2].value === values[8].value && values[2].value !== 'click') {
                setWinMessage( { isWinDeclared: true, message: `${values[2].value} won`})
            }   else if (values[3].value === values[4].value  && 
                values[3].value === values[5].value && values[3].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message:  `${values[3].value} won`})
            }  else if (values[0].value === values[4].value  && 
                values[0].value === values[8].value && values[0].value !== 'click') {
                setWinMessage( { isWinDeclared: true, message: `${values[0].value} won`})
            }   else if (values[2].value === values[4].value  && 
                values[2].value === values[6].value && values[2].value !== 'click') {
                setWinMessage({ isWinDeclared: true, message:  `${values[2].value} won`})
            } else if(values.every((item) => item.value !== 'click')) {
                setWinMessage({ isWinDeclared: true, message:  `Match Draw`})
             }  else {
                return;
            }
    }
    
  useEffect(() => {
    winCriteria();
  },[values])

   
const onClickHandler = (item: any) => {
        if(item.value === 'click'){   
        if(isCrossed){
           const updateValue = values.map((element) =>
           element.id === item.id ? { ...element, value: 'X' } : element)
           setValues(updateValue)
        } else {
           const updateValue = values.map((element) =>
           element.id === item.id ? { ...element, value: 'O' } : element)
           setValues(updateValue)
        }
        setIsCrossed(!isCrossed)
        } else {
            Snackbar.show({
                text: 'Position already filled',
                duration: Snackbar.LENGTH_SHORT,
              });
        }
    } 

    const reloadGame = () =>  {
      setValues(values.map((item) => ({...item, value: 'click'})))
      setWinMessage((prev) => ({...prev, isWinDeclared: false }))
      setIsCrossed(false)
    }
   
    const getHeader = () => (
        <View style={styles.header_container}>
            <Text style={styles.header_text}>Tic Tac Toe</Text>
        </View>
    )

    const getTicTacToeSquare = (item: any) => (
        <TouchableOpacity 
        key={item.id}
        style={styles.button}
        onPress={() => onClickHandler(item)}
        disabled={winMessage.isWinDeclared}
        >
        <Text style={styles.button_text}>{item.value}</Text>
        </TouchableOpacity>
    )

    const getGameView = () => (
        <View style={styles.game_view_container}>
            {values.map(getTicTacToeSquare)}
        </View>
    )

    const getTurnMessage = () => (
        <View>
            <Text style ={styles.turn_message}>{isCrossed ? 'X turn' : 'O turn'}</Text>
        </View>
    )

    const getWinMessage = () => (
        <Text style={styles.win_text}>{winMessage.message}</Text>
    )

    const getReloadGame = () => (
        <TouchableOpacity 
        style={styles.reload_button}
        onPress={reloadGame}
        >
        <Text style={styles.reload_button_text}>Reload Game</Text>
        </TouchableOpacity>
    )

 return (
    <View style={styles.container}>
       {getHeader()}
       {getGameView()}
       {!winMessage.isWinDeclared && getTurnMessage()}
       {winMessage.isWinDeclared && getWinMessage()}
       {winMessage.isWinDeclared && getReloadGame()}
       {winMessage.isWinDeclared && <ConfettiCannon count={500} origin={{x: -20, y: 100}} />}

    </View>
)
}

export default TicTacToe