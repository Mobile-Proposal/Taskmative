import React from 'react'
import { View, Text } from "react-native";
import tw from "twrnc";

export const ProjectKartu = () => {
  return (
    <View style={tw`w-64 py-2 px-4 rounded-xl shadow bg-[#3662FF] mb-2`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`flex flex-col`}>
          <Text style={tw` mb-1 text-[20px] tracking-tight text-white`}>
            Design Homepage
          </Text>

          <Text style={tw`mb-3 text-[13px] tracking-tight text-white`}>
            Water Company Website
          </Text>

          <View style={tw`w-full  rounded-full h-1.5 bg-gray-300 mb-3`}>
            <View
              style={[
                tw`bg-white h-1.5 rounded-full`,
                { width: "45%" },
              ]}></View>
          </View>

          <View style={tw`flex flex-row gap-x-2 items-center `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none">
              <path
                d="M15 2.8913V6.8913M9 2.8913V6.8913M20.4826 11.8913H3.51733M20.4826 11.8913C20.2743 6.18407 18.154 4.3913 12 4.3913C5.84596 4.3913 3.7256 6.18407 3.51733 11.8913M20.4826 11.8913C20.4943 12.2121 20.5 12.5453 20.5 12.8913C20.5 19.3913 18.5 21.3913 12 21.3913C5.5 21.3913 3.5 19.3913 3.5 12.8913C3.5 12.5453 3.50563 12.2121 3.51733 11.8913"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Text style={tw`text-white`}>Senin, 10 July 2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
