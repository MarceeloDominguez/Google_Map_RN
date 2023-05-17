import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { locationsOfInterest } from "./data/data";

const { width } = Dimensions.get("window");
const CARD_WIDTH_IMAGE = width * 0.8;
const CARD_HEIGHT_IMAGE = 200;

const category = ["Restaurantes", "Gasolineras", "Compras", "Supermercados"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Restaurantes");

  const filterLocationOfInterest = locationsOfInterest.filter(
    (item) => item.category === selectedCategory
  );

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const mapViewRef = useRef<MapView | null>(null);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH_IMAGE + 0.3);
      if (index >= filterLocationOfInterest.length) {
        index = filterLocationOfInterest.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      if (mapIndex !== index) {
        mapIndex = index;
        const { location } = filterLocationOfInterest[index];

        mapViewRef.current?.animateToRegion(
          {
            ...location,
            latitudeDelta: 0.37473382005100575,
            longitudeDelta: 0.25581903755664115,
          },
          350
        );
      }
    });
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={styles.container}
        ref={mapViewRef}
        initialRegion={{
          latitude: -34.60053094260835,
          latitudeDelta: 0.37473382005100575,
          longitude: -58.41538690030575,
          longitudeDelta: 0.25581903755664115,
        }}
      >
        {filterLocationOfInterest.map((item, index) => {
          return (
            <Marker key={index} coordinate={item.location}>
              <Image
                source={require("./assets/location.png")}
                style={styles.imageLocation}
                resizeMode="contain"
              />
              {item.icon}
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.wrapInput}>
        <View style={styles.containerInput}>
          <Text style={styles.placeholder}>Busca aquí</Text>
        </View>
      </View>
      {/* item categorias */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        style={styles.horizontalCategories}
        contentContainerStyle={{
          paddingRight: 30,
          alignItems: "center",
        }}
      >
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              style={styles.containerCategory}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.itemCategory,
                  { color: selectedCategory === item ? "#E74646" : "#000" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* images slider */}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        snapToInterval={CARD_WIDTH_IMAGE + 20}
        snapToAlignment="center"
        style={styles.containerSlider}
        contentContainerStyle={{
          paddingRight: width * 0.1 - 10,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {filterLocationOfInterest.map((item, index) => {
          return (
            <View key={index} style={styles.containerImageSlider}>
              <Image source={{ uri: item.image }} style={styles.imageSlider} />
              <Text style={{ paddingVertical: 10, paddingLeft: 10 }}>
                Hola Mundo
              </Text>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapInput: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 50,
  },
  containerInput: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 18,
    elevation: 12,
  },
  placeholder: {
    fontSize: 16,
    letterSpacing: 0.4,
    color: "gray",
  },
  horizontalCategories: {
    position: "absolute",
    top: 90,
    paddingLeft: 15,
    marginTop: 10,
    height: 50,
  },
  containerCategory: {
    backgroundColor: "#fff",
    marginHorizontal: 5,
    height: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 15,
    elevation: 8,
  },
  itemCategory: {
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.4,
  },
  imageLocation: {
    width: 50,
    height: 50,
  },
  containerSlider: {
    position: "absolute",
    bottom: 0,
  },
  containerImageSlider: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
    backgroundColor: "#fff",
    elevation: 12,
  },
  imageSlider: {
    width: CARD_WIDTH_IMAGE,
    height: CARD_HEIGHT_IMAGE,
  },
});
