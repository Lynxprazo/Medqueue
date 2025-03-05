import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Navigationbar from "../component/navigation";
import UserProf from "../component/userprofile";
import MedicalButton from "../component/medicalbtn";

const Emergence = () => {
  return (
    <View style={emergencestyles.maincontainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={emergencestyles.emergenceprofile}>
          <UserProf Age={26} />
        </View>

        <View style={emergencestyles.emergencesection}>
          <View style={emergencestyles.patientemergencyrec}>
            <View style={emergencestyles.transportmeans}>
              <Text style={emergencestyles.transporttitle}>
                Choose Transport Means
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator
                persistentScrollbar
                contentContainerStyle={{ flexDirection: "row" }}
              >
                <View style={emergencestyles.costandmeans}>
                  <View style={emergencestyles.imagecontainer}>
                    <Image
                      source={require("../../assets/images/adaptive-icon.png")}
                      style={emergencestyles.image}
                    />
                  </View>
                  <View style={emergencestyles.innercontainer}>
                    <Text style={emergencestyles.cost}>Helicopter</Text>
                    <Text style={emergencestyles.cost}>Cost 0$</Text>
                  </View>
                </View>
                <View style={emergencestyles.costandmeans}>
                  <View style={emergencestyles.imagecontainer}>
                    <Image
                      source={require("../../assets/images/adaptive-icon.png")}
                      style={emergencestyles.image}
                    />
                  </View>
                  <View style={emergencestyles.innercontainer}>
                    <Text style={emergencestyles.cost}>Helicopter</Text>
                    <Text style={emergencestyles.cost}>Cost 0$</Text>
                  </View>
                </View>
                <View style={emergencestyles.costandmeans}>
                  <View style={emergencestyles.imagecontainer}>
                    <Image
                      source={require("../../assets/images/adaptive-icon.png")}
                      style={emergencestyles.image}
                    />
                  </View>
                  <View style={emergencestyles.innercontainer}>
                    <Text style={emergencestyles.cost}>Helicopter</Text>
                    <Text style={emergencestyles.cost}>Cost 0$</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator
              nestedScrollEnabled={true}
              contentContainerStyle={emergencestyles.patientservice}
            >
              {Array.from({ length: 40 }).map((_, index) => (
                <MedicalButton key={index} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Navigationbar />
    </View>
  );
};

const emergencestyles = StyleSheet.create({
  cost: {
    fontWeight: "400",
    fontSize: 18,
    color: "grey",
  },
  innercontainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  costandmeans: {
    backgroundColor: "white",
    borderRadius: 22,
    marginVertical: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginHorizontal: 12,
  },
  transporttitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(236, 236, 236, 0.2)",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  patientservice: {
    backgroundColor: "rgba(175, 185, 185, 0.2)",
    width: 102,
    borderRadius: 12,
    padding: 10,
  },
  patientemergencyrec: {
    width: "73%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "rgba(199, 248, 248, 0.2)",
    margin: 12,
  },
  // Added missing style for transportmeans
  transportmeans: {
    marginVertical: 10,
  },
  emergencesection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    flex: 1,
  },
  emergenceprofile: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 12,
    paddingHorizontal: 12,
    margin: 12,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#eff5ec",
    paddingVertical: 34,
  },
});

export default Emergence;
