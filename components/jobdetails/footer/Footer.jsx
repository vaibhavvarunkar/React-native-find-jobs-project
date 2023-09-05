import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './footer.style'
import * as Linking from 'expo-linking';

const Footer = ({url}) => {
  console.log(url);
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.likeBtn}>
      <Image source={icons.heartOutline} resizeMode="contain" style={styles.likeBtnImage} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Footer