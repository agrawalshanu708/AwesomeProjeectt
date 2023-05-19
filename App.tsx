import React from 'react';
import { View, StyleSheet} from 'react-native';

import CurrencyApp from './projects/currency/CurrencyApp';
import DiceRoller from './projects/diceRoller/DiceRoller';
import Music from './projects/music/Music';
import NetflixStore from './projects/netflixStore/NetflixStore';
import ProfilePic from './projects/profilePic/ProfilePic';
import TapMe from './projects/TapMe/TapMe';
import TicTacToe from './projects/tictactoe/TicTacToe';

const styles = StyleSheet.create({
  container :{
    flex: 1,
  }
})

const App = () => {
  return (
    <View style={styles.container}>
    {/* <TapMe/> */}
     {/* <DiceRoller/> */}
     {/* <Music /> */}
     {/* <CurrencyApp /> */}
     {/* <ProfilePic /> */}
     <TicTacToe />
     {/* {<NetflixStore />} */}
    </View>
  )
}

export default App