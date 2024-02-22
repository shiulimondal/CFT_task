//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, Pressable, TextInput, Alert } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, StatusBar } from 'react-native-basic-elements';
import * as Animatable from 'react-native-animatable';
const AnimatableBtn = Animatable.createAnimatableComponent(Pressable);
import ProductList from '../../Components/Header/HomeCard/ProductList';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('screen')
const Home = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [itemName, setIteName] = useState('');
    const [itemDet, setItemDet] = useState('');
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;

    if (hrs >= 0.1 && hrs <= 11.59)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 16)
        greet = 'Good Afternoon';
    else if (hrs >= 16.01 && hrs <= 24)
        greet = 'Good Evening';

    const [Idata, setIdata] = useState([
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
        {
            title: 'asdf',
            body: 'jkkdslkah;lhg;ljg;lj'
        },
     
    ]);
    
    const Add_Item = async (val) => {
        const updatedData = [...Idata];
        updatedData.push(val);
        setIdata(updatedData);
    };

    const handleLogout = async () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to log out?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Logout',
                onPress: async () => {
                  try {
                    await AsyncStorage.removeItem('email');
                    navigation.navigate('Login');
                  } catch (error) {
                    console.error('Error logging out:', error);
                  }
                },
              }
            ]
          );
      };
    
    return (
        <Container>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle='dark-content'
            />
            <Animatable.View animation={'slideInDown'} duration={1500} style={styles.headerView_sty}>

                <Image source={require('../../Assets/img/user.png')} style={styles.user_img} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                    <View style={styles.message_txt_view}>
                        <Text style={styles.morning_txt}>{greet}</Text>
                        <Text style={styles.user_name_txt}>Jhon Doe</Text>
                    </View>
                    <Pressable onPress={()=>handleLogout()}>
                    <Icon name='log-out' type='Entypo' style={{ marginRight: 30 }} />
                    </Pressable>
                </View>
            </Animatable.View>

            <FlatList
                data={Idata}
                showsVerticalScrollIndicator={false}
                keyExtractor={(iem, index) => index.toString()}
                ListEmptyComponent={() => (
                    <View style={styles.emptyListContainer}>
                        <Text style={{fontSize:20}}>No Data Found</Text>
                    </View>
                )}
                renderItem={({ item, index }) => {
                    return <ProductList item={item} />;
                }}
            />
            <AnimatableBtn
                activeOpacity={0.5}
                onPress={toggleModal}
                animation={'zoomIn'}
                duration={1000}
                style={styles.button_sty}
            >
                <Icon name='plus' type='AntDesign' size={28} />
            </AnimatableBtn>

            <Modal
                isVisible={isModalVisible}
                style={{
                    justifyContent: 'center',
                    marginHorizontal: 20,
                    marginBottom: 50,

                }}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={{
                    ...styles.modal_view,
                }}>
                    <View style={styles.modal_tpo_view}>
                        <Text style={styles.add_it_txt}>Add Item</Text>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Icon name='close' type='AntDesign' />
                        </Pressable>
                    </View>
                    <AppTextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholder="Item Name"
                        inputContainerStyle={styles.Container_sty}
                        value={itemName}
                        onChangeText={(val)=>setIteName(val)}
                    />

                    <AppTextInput
                        numberOfLines={5}
                        textAlignVertical='top'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholder="Item Details..."
                        inputContainerStyle={styles.Container_sty}
                        value={itemDet}
                        onChangeText={(val)=>setItemDet(val)}
                    />

                    <AppButton
                        title="Add"
                        textStyle={{
                            ...styles.postAdds_txt,

                        }}
                        style={{
                            ...styles.Adds_button,

                        }}
                        onPress={() => { setModalVisible(false), Add_Item({ title: itemName, body: itemDet }) }}
                    />
                </View>
            </Modal>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerView_sty: {
        width: width,
        backgroundColor: '#FF8080',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 15,
        flexDirection: 'row',
        paddingTop: 50
    },
    user_img: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    message_txt_view: {
        marginLeft: 15
    },
    morning_txt: {
        fontSize: 18,
        color: '#000'
    },
    user_name_txt: {
        fontSize: 14,
        color: '#000'
    },
    button_sty: {
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8080',
        borderRadius: 30,
        position: 'absolute',
        bottom: 90,
        right: 40
    },
    modal_view: {
        height: 400,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15
    },
    modal_tpo_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    add_it_txt: {
        fontSize: 18,
        color: '#000'
    },
    Container_sty: {
        borderColor: '#FF8080',
        marginTop: 30,
        paddingHorizontal: 10
    },
    Adds_button: {
        height: 48,
        width: 270,
        backgroundColor: '#FF8080',
        marginTop: 40,
        alignSelf: 'center'
    },
    emptyListContainer:{
        alignItems:'center',
        justifyContent:'center',
    marginTop:100
    }
});

//make this component available to the app
export default Home;
