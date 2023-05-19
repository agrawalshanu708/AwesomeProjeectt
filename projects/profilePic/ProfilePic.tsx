import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Button} from 'react-native'
import { RNCamera } from 'react-native-camera'

const styles = StyleSheet.create({
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        fontSize: 20
    },
    container: {
        backgroundColor: '#0A79DF',
        // flex: 1,
    },
    preview: {

    },
    captureButton: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '30%',
        padding: 1,
        backgroundColor: '#1e2022',
    },
    captureButtonText: {
        fontSize: 20,
        color: '#ffff'
    },

    camText: {

    }
})

const LoaderView = () => (
    <View style={styles.loader}>
        <Text style={styles.loaderText}>Loading....</Text>
    </View>
)  

const ProfilePic = () => {
 
    const [image, setImage] = useState(null)
    const takePicture = async (camera: any) => {
        try {
            const options = {quality: 0.9, base64: false}
            const data = await camera.takePictureAsync(options)
            setImage(data)
        } catch (error) {
            console.error('error', error)
        }
    }

  return (
    <View style={styles.container}>
        {
            image ? (
               <ScrollView>
                <Text style={styles.camText}>Your new profile pic is here</Text>
                <Image source={image}/>
                <Button
                title='Click new profile picture'
                onPress={() => setImage(null)}
                ></Button>
               </ScrollView>
            ) : (
                <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                captureAudio={false}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                  title: 'permission to use camera',
                  message: 'longer text to use camera',
                  buttonPositive: 'OK',
                  buttonNegative: 'Cancel',  
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'permission to use audio',
                    message: 'longer text to use audio',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',  
                  }}
                >
                    {({ camera, status }) => {
                        if(status !== 'READY') return <LoaderView/> 
                        return (
                            <View>
                                <TouchableOpacity
                                onPress={() => takePicture(camera)}
                                style={styles.captureButton}
                                >
                                    <Text
                                      style={styles.captureButtonText}
                                    >Snap</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                </RNCamera>
            )
        }
    </View>
  )
}

export default ProfilePic