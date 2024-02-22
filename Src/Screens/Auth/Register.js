
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
import { useNavigation } from '@react-navigation/native';
const AnimatableBtn = Animatable.createAnimatableComponent(Pressable);
const Fldvalid = txt => txt && txt.replace(/\s/g, '').length;


const { height, width } = Dimensions.get('window')
const Register = () => {
    const navigation = useNavigation();
    const [passwordShow, setPasswordShow] = useState(true);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [loderBtn, setloderBtn] = useState(false);

    const getRegister = () => {
        setloderBtn(true);
        if (Name === '') {
            Toast.show('Enter Your Name', Toast.SHORT);
            return;
        }
        if (Email === '') {
            Toast.show('Enter Email Id', Toast.SHORT);
            return;
        }
        let pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.](?!gmail|googlemail)[a-z]{2,5}/g;
        let emailresult = pattern.test(Email);
        if (Fldvalid(Email) === 0 || Email === '') {
        } else if (emailresult !== true) {
            Toast.show('Enter Valid Email Id', Toast.SHORT, Toast.BOTTOM);
            return;
        }
        if (Password === '') {
            Toast.show('Enter Password', Toast.SHORT);
            return;
        }
        
        setTimeout(() => {
            if (Name !== '' && Email !== '' && Password !== '') {
                saveData();
                setloderBtn(false);
                navigation.goBack()
            } else {
                setloderBtn(false);
                Toast.show('Something Wrong', Toast.SHORT); 
            }
        }, 3000);
    };
    
    const saveData = async () => {
        await AsyncStorage.setItem('name', Name);
        await AsyncStorage.setItem('email', Email);
        await AsyncStorage.setItem('password', Password);
        console.log('Data saved:', { name: Name, email: Email, password: Password });
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
                <Text style={styles.title_txt}>Create New Account</Text>
                <Animatable.View animation={'slideInLeft'} duration={1000}>
                    <AppTextInput
                        keyboardType='email-address'
                        leftIcon={{
                            name: 'user',
                            type: 'AntDesign'
                        }}
                        placeholder="Enter Name"
                        inputContainerStyle={styles.Container_sty}
                        value={Name}
                        onChangeText={(val) => setName(val)}
                    />
                </Animatable.View>
                <Animatable.View animation={'slideInRight'} duration={1000}>
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

                <Animatable.View animation={'slideInLeft'} duration={1000}>
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
                    onPress={() => getRegister()}
                    animation={'zoomIn'}
                    duration={1000}
                    style={styles.button_sty}
                > 
                {
                    loderBtn?
                    <ActivityIndicator size={'small'} color={'#fff'}/>
                    :
                    <Text style={styles.log_txt}>SignUp</Text>
                }
                
                </AnimatableBtn>
                <Pressable onPress={() => NavigationService.navigate('Login')} >
                    <Text style={styles.bottom_txt}>Already have account?</Text>
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
    bottom_txt: {
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#000'
    }
});

//make this component available to the app
export default Register;
