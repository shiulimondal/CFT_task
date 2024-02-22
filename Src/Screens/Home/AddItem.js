//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';

// create a component
const AddItem = () => {
    return (
        <Container>
            <BackHeader title='Add Item'/>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AddItem;
