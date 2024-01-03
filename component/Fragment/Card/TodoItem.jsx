import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons"; 
import { MaterialIcons } from "@expo/vector-icons"; 

export const TodoItem = () => {
  return (
    <View
      style={tw`w-full flex flex-row justify-between items-center py-3 px-4 rounded-lg  mb-2`}>
      
      {/* delete icon  */}
      <MaterialIcons name="delete-outline" size={20} color="#EF4770" />
      {/* to do text  */}
      <Text> Design Projek </Text>
      {/* checked icon  */}
      <FontAwesome5 name="check-square" size={16} color="black" />
    </View>
  );
};
