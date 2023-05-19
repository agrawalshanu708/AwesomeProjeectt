import React, { useState } from 'react'
import { View,  StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'

const styles  = StyleSheet.create({
    container: {
        padding: 30,
    },

    resultContainer: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#bbe1fa'
    },

    resultValue: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF',
    },

    inputContainer: {
        borderWidth: 1,
        padding: 10,
        marginTop: 30,
        borderColor: '#bbe1fa'
    },

    inputValue: {
       fontSize: 20,
       textAlign: 'center',
       color: '#FFFFFF'
    },

    convertButtonContainer : {
        flexDirection: 'row',
        flexWrap:'wrap',       
        marginTop: 50  
    },

    convertButton: {
       width: '33%',
       borderWidth: 1,
       height: 90,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor: '#bbe1fa'
    },

    convertButtonText: {
       fontSize: 20,
       color: '#FFFFFF'
    }
})

const CURRENCY_LIST = [
    {id: 1, name: "USD", value: 0.014},
    {id: 2, name: "EU", value: 0.012 },
    {id: 3, name: "POND", value: 0.011},
    {id: 4, name: "RUBEL", value: 0.93},
    {id: 5, name: "AUSD", value: 0.2},
    {id: 6, name: "CUSD", value: 0.019},
    {id: 7, name: "YEN", value: 1.54},
    {id: 8, name: "DINAR", value: 0.0043},
    {id: 9, name: "BITCOIN", value: 0.000004},
]

const CurrencyApp = () => {

    const [indiancurrency, setIndianCurrency] = useState<number>(0)
    const [calculatedCurrency, setCalculatedCurrency] = useState<number>(0)

    const getUserCurrency = (ee: any) => {
          setIndianCurrency(ee)
    }

    const convertCurrencyHandler = (currency: any) => {         
        let result = Number((indiancurrency * currency.value).toFixed(2))
        setCalculatedCurrency(result)
    }

    const getConvertButton = (currency: any) => (
       <TouchableOpacity 
       key ={currency.id}
       style={styles.convertButton}
       onPress={() => convertCurrencyHandler(currency)}
       >
        <Text
        style={styles.convertButtonText}
        >{currency.name}</Text>
       </TouchableOpacity>
    )
    

    const getResultView = () => (      
        <View style={styles.resultContainer}>
        <Text
        style={styles.resultValue}
        >{calculatedCurrency}
        </Text>
        </View>
    )

    const getInputView = () => (
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputValue}
        placeholder='Enter Value'
        onChangeText={(text) => getUserCurrency(text)}
        keyboardType="number-pad"
        placeholderTextColor='#c1c1c1'
        />
        </View>
    )

    const getConvertButtonsView = () => (
        <View style={styles.convertButtonContainer}>
          {CURRENCY_LIST.map(getConvertButton)}
        </View>
    )

  return (
    <>
    <ScrollView backgroundColor='#252323'
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior='automatic'    
    >
        <SafeAreaView style={styles.container}>
        {getResultView()}
        {getInputView()}
        {getConvertButtonsView()}
        </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default CurrencyApp