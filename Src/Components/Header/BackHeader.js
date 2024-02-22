import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-basic-elements';

const BackHeader = ({ title = '' }) => {
  return (
    <View style={styles.main_view}>
      <Icon name='left' type='AntDesign' />
      <Text style={styles.title_txt}>{title}</Text>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  main_view: {
    width: '100%',
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#FF8080',
    flexDirection: 'row'
  },
  title_txt: {
    fontSize: 16,
    marginLeft: 20,
    color: '#000'
  }
});
