import React, {useState} from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'


type MovieListType = {
   name: string,
   seasons: number,
}

const styles = StyleSheet.create({
    container: {
        padding: 30
   
    },

    heading: {
      fontSize: 35,
      textAlign: 'center',
    },
    
    input_container: {
        marginTop: 50
     
    },

    movie_name_input: {
     borderWidth: 1,
    },
    
    movie_season_input: {
    borderWidth: 1,
    marginTop: 10
    },
    
    action_container: {
       backgroundColor: '#29A6A6',
       borderWidth: 1,
       marginTop: 10,
       borderRadius: 10,
       height: 40
    },

    add_cta: {
        alignItems: 'center',
        justifyContent : 'center',
        textAlign: 'center',
        fontSize: 25
    }
})

const NetflixStore = () => {

const [movie, setMovie] = useState<MovieListType>({}) 
const [movieList, setMovieList] = useState<MovieListType[]>([]) 

const getMovieName = (inputText: any) => {
   setMovie((prev) => ({...prev, name: inputText}))
}

const getSeasonCount = (inputText: any) => {
    setMovie((prev) => ({...prev, seasons: inputText}))
}

const onClickHandler = () => {
    setMovieList((prev) => ([...prev, movie]))
    setMovie({})
}

const getHeaderView = () => (
       <Text style={styles.heading}>Add to watch list</Text>
)

const getInputView = () => (
  <View style={styles.input_container}>
   <TextInput 
   style={styles.movie_name_input}
   placeholder={'Type Movie Name'}
   onChangeText={(inputText) => getMovieName(inputText)}
   />
   <TextInput
   style={styles.movie_season_input}
   placeholder={'Type total season'}
   onChangeText={(inputText) => getSeasonCount(inputText)}
   />
  </View>
 ) 
 
const getActionView = () => (
     <TouchableOpacity
     onPress={onClickHandler}
     style={styles.action_container}
     >
      <Text style={styles.add_cta}>Add</Text>
     </TouchableOpacity>
)

const getMovie = (item: any) => (
    <View key={item.name}>
        <Text>{item.name}</Text>
        <Text>{item.seasons}</Text>
    </View>
)

const getMovieListView = () => (
    <View>
        {movieList.map(getMovie)}
    </View>
)

  return (
    <View style={styles.container}>
     {getHeaderView()}
     {getInputView()}
     {getActionView()}
     {getMovieListView()}
    </View>
  )
}

export default NetflixStore