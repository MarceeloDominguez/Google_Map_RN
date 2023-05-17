import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const style = StyleSheet.create({
  iconInLocation: {
    position: "absolute",
    top: 10,
    left: 16,
  },
});

export const locationsOfInterest = [
  {
    location: {
      latitude: -34.59519198769251,
      longitude: -58.43843227252365,
    },
    image:
      "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg",
    category: "Restaurantes",
    icon: (
      <Ionicons
        name="ios-restaurant"
        size={20}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.63766382947247,
      longitude: -58.43059418722987,
    },
    image:
      "https://cdn.pixabay.com/photo/2021/03/16/10/04/street-6099209_1280.jpg",
    category: "Restaurantes",
    icon: (
      <Ionicons
        name="ios-restaurant"
        size={20}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.51647972775582,
      longitude: -58.523301053792245,
    },
    image:
      "https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg",
    category: "Restaurantes",
    icon: (
      <Ionicons
        name="ios-restaurant"
        size={20}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.557619141673875,
      longitude: -58.471516985446215,
    },
    image:
      "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg",
    category: "Restaurantes",
    icon: (
      <Ionicons
        name="ios-restaurant"
        size={20}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.52980843271902,
      longitude: -58.4668898396194,
    },
    image:
      "https://cdn.pixabay.com/photo/2013/10/14/10/36/froet-gas-195383_1280.jpg",
    category: "Gasolineras",
    icon: (
      <FontAwesome5
        name="gas-pump"
        size={18}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.675595118747346,
      longitude: -58.330120649188764,
    },
    image:
      "https://cdn.pixabay.com/photo/2016/09/12/13/57/petrol-stations-1664553_1280.jpg",
    category: "Gasolineras",
    icon: (
      <FontAwesome5
        name="gas-pump"
        size={18}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.53478115175881,
      longitude: -58.523724507540464,
    },
    image:
      "https://cdn.pixabay.com/photo/2022/02/07/15/22/fuel-6999638_1280.jpg",
    category: "Gasolineras",
    icon: (
      <FontAwesome5
        name="gas-pump"
        size={18}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
  {
    location: {
      latitude: -34.56595772600714,
      longitude: -58.46351897343993,
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/24/08/16/charging-station-5212924_1280.jpg",
    category: "Gasolineras",
    icon: (
      <FontAwesome5
        name="gas-pump"
        size={18}
        color="black"
        style={style.iconInLocation}
      />
    ),
  },
];
