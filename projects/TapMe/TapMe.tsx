import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  text: {
    fontSize: 30,
    backgroundColor: 'violet',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    color: '#FFFFFF',
  }

})

const TapMe = () => {

  const [randomColor, setRandomColor] = useState('rgb(32,0,126)')

  const colorHandler = useCallback(() => {
    let color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    setRandomColor(color)
  },[])

  return (
    <View style={[styles.container, {backgroundColor: randomColor} ]}>
       <StatusBar backgroundColor={randomColor} />
      <TouchableOpacity onPress={colorHandler}>
      <Text style={styles.text}>Tap Me !!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TapMe