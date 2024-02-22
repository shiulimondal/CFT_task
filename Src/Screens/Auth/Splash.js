//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            getData() 
        }, 2500)
    }, [])

    const getData = async ()=>{
        const gemail = await AsyncStorage.getItem('email')
        if (gemail !== '' || gemail !== null || gemail !== undefined) {
            NavigationService.navigate('Home')
        }
        else{
            NavigationService.navigate('Login')  
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='dark-content'
            />
            <Animatable.Image
                animation={'zoomIn'}
                duration={2000}
                source={require('../../Assets/img/logoB.png')}
                style={styles.logoImg_sty}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logoImg_sty: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        borderRadius:50
    }
});

//make this component available to the app
export default Splash;
