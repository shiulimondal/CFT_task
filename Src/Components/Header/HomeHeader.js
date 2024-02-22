import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const HomeHeader = () => {
  return (
    <AppBar
      leftIcon={{
        name: 'three-bars',
        type: 'Octicons',
        color: '#000000',
        size: 20
      }}
      leftComponent='icon'
      onLeftButtonPress={() => NavigationService.openDrawer()}
      title='मध्यदेशीय वैश्य महा सभा'
      titleStyle={{
        fontSize: moderateScale(15),
        color: '#A33907',
        fontWeight: '600'
      }}
    />
  )
}

export default HomeHeader

const styles = StyleSheet.create({})