import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import Sound from 'react-native-sound';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c'
    },
    logo : {
     alignSelf: 'center',
     marginTop: 4,
    },
    soundContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: 4,
      rowGap: 4,
      marginTop: 40,
      justifyContent: 'center',
    },
    button: {
      borderWidth: 1,
      width: '48%',
      height: 110,
      backgroundColor: '#0f4c75',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
     fontSize: 50,
     color: '#ff4301',
    }
})

const music = [
require('../../assets/s1.wav'),
require('../../assets/s2.wav'),
require('../../assets/s3.wav'), 
require('../../assets/s4.wav'),
require('../../assets/s5.wav'),
require('../../assets/s6.wav'),
require('../../assets/s7.wav'),
require('../../assets/s8.wav'),
require('../../assets/s9.wav'),
require('../../assets/s10.wav'),
]

const MUSIC_LIST = [
  {sound: require('../../assets/s1.wav'), ctaText: 1 , id: 1},
  {sound: require('../../assets/s2.wav'), ctaText: 2 , id: 2},
  {sound: require('../../assets/s3.wav'), ctaText: 3 , id: 3},
  {sound: require('../../assets/s4.wav'), ctaText: 4 , id: 4},
  {sound: require('../../assets/s5.wav'), ctaText: 5 , id: 5},
  {sound: require('../../assets/s6.wav'), ctaText: 6 , id: 6},
  {sound: require('../../assets/s7.wav'), ctaText: 7 , id: 7},
  {sound: require('../../assets/s8.wav'), ctaText: 8 , id: 8},
  {sound: require('../../assets/s9.wav'), ctaText: 9 , id: 9},
  {sound: require('../../assets/s10.wav'), ctaText: 10 , id: 10},
  ]


const Music = () => {

  const playSound = (sound: any) => {
   
    const spanishMusic = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if(error){
        console.log('failed to load sound', error);
        return ;
      }
    })

    setTimeout(() => {
      spanishMusic.play()
    }, 100)

    spanishMusic.release()
  }


  const getMusicButtons = (item: any) => (
    <TouchableOpacity 
    key = {item} 
    style={styles.button}
    onPress={() => playSound(item)}
    >
    <Text 
    style={styles.buttonText} 
    >
    {item}
    </Text>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.container}>
      <Image
      style={styles.logo} 
      source={require('./../../assets/logo.png')}/>
    <View style={styles.soundContainer} >
      {music.map(getMusicButtons)}
    </View>
    </ScrollView>
  )
}

export default Music