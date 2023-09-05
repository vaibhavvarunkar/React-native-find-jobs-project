import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PopularJobCard = ({item, selectedJob, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handlePress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={item.employer_logo !==null ? {url:item.employer_logo} : {url:"https://authenticjobs.com/wp-content/uploads/2020/04/cropped-aj-site-favicon.png"}}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard