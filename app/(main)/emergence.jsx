import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Navigationbar from "../component/navigation";
import { ScrollView } from "react-native";
import UserProf from "../component/userprofile";
import MedicalButton from "../component/medicalbtn";
import SlideButton from "../component/slidebutton";

const Emergence = () => {
  return (
    <View style={emergencestyles.maincontainer}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={emergencestyles.emergencestart}
      >
        <View style={emergencestyles.emergenceprofile}>
          <UserProf Age={26} />
        </View>

        <View style={emergencestyles.emergencesection}>
          <View style={emergencestyles.patientemergencyrec}>
            <View style={emergencestyles.transportmeans}>
              <Text style={emergencestyles.transporttitle}>
                Choose Transport means
              </Text>

              <View style={emergencestyles.costandmeans}>
                <View style={emergencestyles.imagecontainer}>
                  <Image
                    source={require("../../assets/images/adaptive-icon.png")}
                    style={emergencestyles.image}
                  />
                </View>
                <View style={emergencestyles.innercontainer}>
                  <Text style={emergencestyles.cost}>helcopter</Text>
                  <Text style={emergencestyles.cost}>cost 0$</Text>
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
                  <Text style={emergencestyles.cost}>Ambulance</Text>
                  <Text style={emergencestyles.cost}>cost 0$</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={emergencestyles.slidebuttoncontainer}><SlideButton/></View>

          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={true}
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
  slidebuttoncontainer:{
  justifyContent:"center",
  left:22
  },
  cost: {
    fontWeight: 400,
    fontSize: 18,
    color: "grey",
  },
  innercontainer: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: 8,
    flexDirection: "column",
    columnGap: 5,
  },
  costandmeans: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(81, 80, 80, 0.2)",
    marginTop: "12",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  transporttitle: {
    fontSize: 20,
    fontWeight: 600,
    color:"grey"
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  patientservice: {
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(175, 185, 185, 0.2)",
    width: 102,
    borderRadius: 12,
  },
  patientemergencyrec: {
    width: "73%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    top: 12,
    left: 0,
    right: 0,
    backgroundColor: "rgba(199, 248, 248, 0.2)",
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
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#eff5ec",

    paddingVertical: 34,
  },
  emergencestart: {
    marginBottom: 53,
  },
});

export default Emergence;
