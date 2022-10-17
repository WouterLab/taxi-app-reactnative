import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Uber-X-123",
    title: "Classic",
    multiplier: 1,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048339.png",
  },
  {
    id: "Uber-XL-456",
    title: "Comfort",
    multiplier: 1.2,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048317.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Business",
    multiplier: 1.75,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048326.png",
  },
  // {
  //   id: "Uber-UXX-901",
  //   title: "Ultra",
  //   multiplier: 2.25,
  //   image: "https://cdn-icons-png.flaticon.com/512/1048/1048346.png",
  // },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Выберите поездку</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}>
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Время в пути...</Text>
            </View>
            <Text style={tw`text-xl`}>$20</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Выбрать {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
