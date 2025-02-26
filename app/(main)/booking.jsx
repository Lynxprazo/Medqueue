import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router"
import ServiceAvailablecomp from "../component/serviceAvailablecomp";
import Navigationbar from "../component/navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const Booking = () => {
    const router = useRouter()
  return (
    <View style={bookingstyles.maincontainer}>
      <View style={bookingstyles.bkcontainer}>
        <Ionicons
          name="medical"
          style={{ marginBottom: 10 }}
          size={90}
          color="#f0f0f0"
        />
        <View>
          <ServiceAvailablecomp/>
        </View>
        <View style={bookingstyles.suggestiontitle}>
          <Text style={{ color: "#f0f0f0", fontSize: 20, fontWeight: 700 }}>Select Day Period For Qiuck Suggestion</Text>
        </View>
        <View style={bookingstyles.Dperiod}>
          <View style={bookingstyles.period}>
            <Text style={bookingstyles.Dperiodname}>Morning</Text>
          </View>
          <View style={bookingstyles.period}>
            <Text style={bookingstyles.Dperiodname}>Afternoon</Text>
          </View>
          <View style={bookingstyles.period}>
            <Text style={bookingstyles.Dperiodname}>Evening</Text>
          </View>
          <View style={bookingstyles.period}>
            <Text style={bookingstyles.Dperiodname}>Night</Text>
          </View>
        </View>
        <View style={bookingstyles.bookng}>
          <View>
            <View style={bookingstyles.descriptiontxt}>
              <Icon name="calendar" size={20} style={{ color: "#f0f0f0" }} />
              <Text style={{ color: "#f0f0f0", fontSize: 18, fontWeight: 600 }}>
                Select the meeting date
              </Text>
            </View>
            <View style={bookingstyles.Datebooking}>
              <View style={bookingstyles.dateday}>
                <Text style={bookingstyles.dayNum}>2</Text>
                <Text style={bookingstyles.dayName}>Mon</Text>
              </View>
              <View style={bookingstyles.dateday}>
                <Text style={bookingstyles.dayNum}>3</Text>
                <Text style={bookingstyles.dayName}>Tue</Text>
              </View>
              <View style={bookingstyles.dateday}>
                <Text style={bookingstyles.dayNum}>4</Text>
                <Text style={bookingstyles.dayName}>Wen</Text>
              </View>
              <View style={bookingstyles.dateday}>
                <Text style={bookingstyles.dayNum}>5</Text>
                <Text style={bookingstyles.dayName}>Fri</Text>
              </View>
            </View>
            <View style={bookingstyles.timecontainer}>
              <Ionicons name="timer" size={20} style={{ color: "#f0f0f0" }} />
              <Text style={{ color: "#f0f0f0", fontSize: 18, fontWeight: 600 }}>
                Select time slot
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={bookingstyles.scrollslot}
              showsHorizontalScrollIndicator={true}
              persistentScrollbar={true}
            >
              <View style={bookingstyles.slottmt}>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
                <View style={bookingstyles.slot}>
                  <Text style={{ color: "grey", fontSize: 18, fontWeight: 600 }}>12:30-12:45</Text>
                </View>
              </View>
            </ScrollView>
            <View style = {bookingstyles.bookngcontainer}>
                  <TouchableOpacity onPress={()=>router.push("booking")} style={bookingstyles.bookngbtn}>
                    <Text style={{ color: "#f0f0f0", fontSize: 18, fontWeight: 600 }}>Book Now</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
      </View>
      <Navigationbar />
    </View>
  );
};

const bookingstyles = StyleSheet.create({
  bookngbtn:{
     backgroundColor:"white",
     height:50,
     width:200,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:23,
     backgroundColor: "rgba(0,0,0,0.8)",
  },
  bookngcontainer:{
     marginTop:12,
     justifyContent:"center",
     alignItems:"center"
  },
  scrollslot: {
    paddingHorizontal: 1,
  },
  slot: {
    width: 150,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
  slottmt: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 32,
  },
  timecontainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 12,
  },
  dayName: {
    fontSize: 20,
    fontWeight: 800,
    color: "grey",
  },
  dayNum: {
    fontSize: 20,
    fontWeight: 800,
    color: "grey",
  },
  dateday: {
    backgroundColor: "white",
    width: 70,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 12,
    borderRadius: 12,
  },
  Datebooking: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 12,
    marginBottom: 25,
  },
  descriptiontxt: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 12,
    marginBottom: 12,
  },
  bookng: {
    width: "94%",
    // backgroundColor: "#eff5ec",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 4,
    borderRadius: 23,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  Dperiodname: {
    fontSize: 19,
    fontWeight: 800,
    color: "grey",
  },
  suggestiontitle:{
    marginVertical:12
  },
  period: {
    backgroundColor: "white",
    width: 90,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginBottom: 12,
  },
  Dperiod: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#4CAF50",
    // paddingHorizontal:23
  },
  bkcontainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 89,

  },
});

export default Booking;
