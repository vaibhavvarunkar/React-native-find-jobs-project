import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";
import styles from "./company.style";

const Company = ({ companyLogo, location, jobTitle, companyName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          source={
            companyLogo
              ? { url: companyLogo }
              : {
                  url: "https://authenticjobs.com/wp-content/uploads/2020/04/cropped-aj-site-favicon.png",
                }
          }
        />
      </View>
      <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} /</Text>
          <View style={styles.locationBox}>
            <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
      </View>
    </View>
  );
};

export default Company;
