//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-basic-elements';

// create a component
const ProductList = ({item}) => {
    return (
        <Card style={styles.container}>
            <View style={styles.main_view}>
            <Text style={styles.title_txt}>{item.title}</Text>
            {/* <Icon name='close' type='AntDesign' size={16} color={'#FF8080'}/> */}
            </View>
            <Text numberOfLines={2} style={styles.details_txt}>{item.body}</Text>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal:25,
        borderRadius:7,
        paddingHorizontal:15,
    },
    main_view:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title_txt:{
        fontSize:15,
        color:'#000'
    },
    details_txt:{
        fontSize:12,
        marginTop:5,
        color:'#000'
    }
});

//make this component available to the app
export default ProductList;
