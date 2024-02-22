
//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Dimensions, ActivityIndicator } from 'react-native';
import { AppTextInput, Container, Icon, StatusBar } from 'react-native-basic-elements';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/Navigation';
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AnimatableBtn = Animatable.createAnimatableComponent(Pressable);
const Fldvalid = txt => txt && txt.replace(/\s/g, '').length;


const { height, width } = Dimensions.get('window')
const Login = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loderBtn, setloderBtn] = useState(false);

  // const getLogin = () => {
  //   if (Email == '') {
  //     Toast.show('Enter valid EmailId', Toast.SHORT);
  //   }
  //   else{
  //     // Toast.show('Enter  EmailId', Toast.SHORT);
  //     if (Password == '') {
  //       Toast.show('Enter Password', Toast.SHORT);
  //     }
  //     else{
  //       // Toast.show('Enter Password', Toast.SHORT);
  //       getRegData()
  //     }
  //   }
  
  // }
  // const getRegData = async ()=>{
  //   const rEmail =await AsyncStorage.getItem('email')
  //   const rPassword =await AsyncStorage.getItem('password')
  //   console.log('logdataaaa',rEmail,rPassword);
  //   if (Email === rEmail && Password=== rPassword ) {
  //     NavigationService.navigate('Home')
  //   }else{
  //     Toast.show('somethingwrong', Toast.SHORT);
  //   }
  // }

  const getLogin = () => {
    if (Email === '') {
      Toast.show('Enter valid EmailId', Toast.SHORT);
    } else {
      if (Password === '') {
        Toast.show('Enter Password', Toast.SHORT);
      } else {
        getRegData();
      }
    }
  };
  
  const getRegData = async () => {
    const rEmail = await AsyncStorage.getItem('email');
    const rPassword = await AsyncStorage.getItem('password');
    
    console.log('Stored data:', rEmail, rPassword);
    
    if (Email === rEmail && Password === rPassword) {
      NavigationService.navigate('Home');
    } else {
      Toast.show('Invalid email or password', Toast.SHORT);
    }
  };
  

  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='dark-content'
      />
      <KeyboardAwareScrollView>
        <Animatable.Image
          animation={'zoomIn'}
          duration={1000}
          source={require('../../Assets/img/wc.jpg')}
          style={styles.logoImg_sty}
        />
        <Text style={styles.title_txt}>LogIn</Text>
        <Animatable.View animation={'slideInLeft'} duration={1000}>
          <AppTextInput
            keyboardType='email-address'
            autoCapitalize='none'
            leftIcon={{
              name: 'email',
              type: 'Entypo'
            }}
            placeholder="Enter Email ID"
            inputContainerStyle={styles.Container_sty}
            value={Email}
            onChangeText={(val) => setEmail(val)}
          />
        </Animatable.View>

        <Animatable.View animation={'slideInRight'} duration={1000}>
          <AppTextInput
            leftIcon={{
              name: 'lock',
              type: 'Entypo'
            }}
            placeholder="Enter password"
            inputContainerStyle={{ ...styles.Container_sty, marginTop: 30 }}
            rightAction={
              passwordShow ? (
                <Icon name="eye" type="Ionicon" />
              ) : (
                <Icon name="eye-off" type="Ionicon" />
              )
            }
            onRightIconPress={() => setPasswordShow(!passwordShow)}
            secureTextEntry={passwordShow}
            value={Password}
            onChangeText={(val) => setPassword(val)}
          />

        </Animatable.View>
        <AnimatableBtn
          activeOpacity={0.5}
          // onPress={() => NavigationService.navigate('AppStack')}
          onPress={() => getLogin()}
          animation={'zoomIn'}
          duration={1000}
          style={styles.button_sty}
        >
            {
                    loderBtn?
                    <ActivityIndicator size={'small'} color={'#fff'}/>
                    :
                    <Text style={styles.log_txt}>Login</Text>
                }
          

        </AnimatableBtn>
        <Pressable onPress={()=>NavigationService.navigate('Register')} >
        <Text style={styles.bottom_txt}>Create New Account?</Text>
        </Pressable>
        
      </KeyboardAwareScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  logoImg_sty: {
    height: 180,
    width: 270,
    alignSelf: 'center',
    marginTop: 30
  },
  title_txt: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginTop: 15
  },
  Container_sty: {
    marginHorizontal: 15,
    borderColor: '#FF8080',
    marginTop: 20
  },
  button_sty: {
    height: 48,
    width: width - 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#FF8080',
    borderRadius: 10,
    marginBottom: 20
  },
  log_txt: {
    fontSize: 18,
    color: '#fff'
  },
  bottom_txt:{
    fontSize:15,
    textAlign:'center',
    textDecorationLine:'underline',
    color:'#000'
  }
});

//make this component available to the app
export default Login;
