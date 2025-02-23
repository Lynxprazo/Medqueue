import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import QuickAction from "../component/QuickAction";
import { View, Text, StyleSheet,Dimensions } from "react-native";

const Homepage = () => {

  useState(()=>{

  })
  return (
    <View style={styles.HomepageContainer}>
      <View style={styles.Homepagecover1}>
        <Icon
          name="hospital-symbol"
          size={100}
          style={{ color: "silver" }}
        ></Icon>
      </View>
      <Text style={styles.TextQuick}>Quick Action</Text>
      <View style={styles.Homepagecover2}>
        <View style={{ flex: 1, padding: 10 }}>
          <QuickAction
            name={"bell"}
            size={30}
            text={"Set Remainder"}
            backgroundColor={"#274b5f"}
          />
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <QuickAction
            name={"book"}
            size={30}
            text={"Booking"}
            backgroundColor={"#00d4ff"}
          />
        </View>
      </View>
      <View style={styles.Homepagecover2}>
        <View style={{ flex: 1, padding: 10 }}>
          <QuickAction
            name={"calendar-day"}
            size={30}
            text={"calender"}
            backgroundColor={"#274b5f"}
          />
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <QuickAction
            name={"user-check"}
            size={30}
            text={"Doctor Available"}
            backgroundColor={"#d51341"}
          />
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  HomepageContainer: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingLeft: 1.5,
    paddingRight: 2,
    paddingBottom: 1,
  },
  Homepagecover1: {
    position: "sticky",
    justifyContent: "center",
    borderBottomLeftRadius: "45px",
    borderBottomRightRadius: "45px",
    height: "35%",
    width: "cover",
    alignItems: "center",
    backgroundColor: "#275f38",
    shadowColor: "rgba(0, 0, 0, 0.17)",
    shadowOffset: { width: 0, height: 4 }, // X and Y shadow position
    shadowOpacity: 0.3, // Darkness of shadow
    shadowRadius: 5, // Blur effect
    zIndex: 100,
  },
  TextQuick: {
    fontSize: "25px",
    fontWeight: 900,
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    margin: "12px",
    color:"silver"
  },
  Homepagecover2: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
