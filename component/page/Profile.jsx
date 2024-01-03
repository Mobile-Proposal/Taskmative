import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";

export const Profile = () => {
  return (
    <SafeAreaView style={tw`flex w-full`}>
      <View style={tw`flex-row px-10 items-center pt-25 pb-8 `}>
        <Image
          style={tw`w-25 h-25 rounded-full mr-6 `}
          source={{ uri: "https://source.unsplash.com/random" }}
        />
        <View style={tw`flex-1 items-start`}>
          <Text style={tw`text-2xl font-bold `}>Ihsan Sanny H</Text>
          <Text style={tw`text-lg text-gray-600`}>ihsansanny26@gmail.com</Text>
        </View>
      </View>
      <ScrollView style={tw`mt-5 p-4 `}>
        <View style={tw`items-center`}>
          <TouchableOpacity
            style={tw`bg-white p-5 mb-5 rounded-md flex-row items-center w-full`}
          >
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold`}>Task Done</Text>
              <Text style={tw`text-lg text-gray-600`}>
                Already have 10 Task
              </Text>
            </View>
            <View style={tw`flex-none ml-40`}>
              <Icon name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white p-5 mb-5 rounded-md flex-row items-center w-full`}
          >
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold`}>Project</Text>
              <Text style={tw`text-lg text-gray-600`}>
                Already have 10 Project
              </Text>
            </View>
            <View style={tw`flex-none ml-35`}>
              <Icon name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white p-5 mb-5 rounded-md flex-row items-center w-full`}
          >
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold`}>Change Password</Text>
            </View>
            <View style={tw`flex-none ml-40`}>
              <Icon name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white p-5 mb-5 rounded-md flex-row items-center w-full`}
          >
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold`}>Setting</Text>
              <Text style={tw`text-lg text-gray-600`}>
                Notification, FAQ, Contact
              </Text>
            </View>
            <View style={tw`flex-none ml-30`}>
              <Icon name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white p-5 mb-5 rounded-md px-40 flex-row items-center w-full`}
          >
            <View style={tw`flex-1 justify-center items-center`}>
              <Text style={tw`text-xl font-bold`}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
