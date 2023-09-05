import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './nearbyjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PopularJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={job.employer_logo !==null ? {url:job.employer_logo} : {url:"https://authenticjobs.com/wp-content/uploads/2020/04/cropped-aj-site-favicon.png"}}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard