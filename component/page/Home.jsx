import React from "react";
import {Text, View, ScrollView} from "react-native";
import tw from "twrnc";
// import {GradientCards} from "../Fragment/Card/GradientKartu";
import { Kartu } from "../Fragment/Card/Kartu";
import { ProjectKartu } from "../Fragment/Card/ProjectKartu";
import { TodoItem } from "../Fragment/Card/TodoItem";

export const Home = () => {
    return (
      <View style={tw`w-full bg-white flex items-center mt-6`}>
        {/* Hero */}
        <View style={tw`flex items-start`}>
          <View>
            <View style={tw`gambar mb-4`}>
              <View style={tw`px-2 android: pt-2 bg-white`}>
                <Text
                  style={tw`text-2xl text-blue-950
                            text-[24px] font-semibold`}>
                  Hallo, Mochaimin
                </Text>

                <View style={tw`flex flex-row items-center gap-x-1`}>
                  {/* <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2556 3.76562C12.9417 2.35937 11.0095 1.5 9 1.5C6.99052 1.5 5.05833 2.28125 3.74444 3.76562C2.66242 5.01562 2.1214 6.57812 2.27598 8.14062C2.27598 8.45312 2.35327 8.76562 2.43055 9C3.12614 12.2812 6.68137 15.1719 8.22712 16.2656C8.45899 16.4219 8.69085 16.5 9 16.5C9.30915 16.5 9.54101 16.4219 9.77288 16.2656C11.2413 15.1719 14.8739 12.2812 15.5694 9C15.6467 8.76562 15.6467 8.45312 15.724 8.14062C15.8786 6.57812 15.3376 5.01562 14.2556 3.76562ZM9 10.4844C7.84069 10.4844 6.83595 9.54688 6.83595 8.29688C6.83595 7.04687 7.7634 6.10938 9 6.10938C10.2366 6.10938 11.1641 7.04687 11.1641 8.29688C11.1641 9.54688 10.1593 10.4844 9 10.4844Z"
                      fill="#909090"
                    />
                  </svg> */}
                  <Text
                    style={tw`text-md text-[#909090]
                            text-[14px] font-reguler`}>
                    Cibaduyut Bandung
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Kartu></Kartu>
            </View>
          </View>

          <View
            style={tw`w-96 flex flex-row justify-between items-start  my-4`}>
            <Text
              style={tw`text-blue-950
                            text-[21px] font-semibold`}>
              Project Kamu
            </Text>

            <Text
              style={tw`text-2xl text-pink-400
                            text-[14px] `}>
              Lihat semua
            </Text>
          </View>

          <ScrollView
            style={tw`w-96`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={tw`flex flex-row gap-x-2`}>
              <ProjectKartu />
              <ProjectKartu />
            </View>
          </ScrollView>

          <View
            style={tw`w-96 flex flex-row justify-between items-start  my-4`}>
            <Text
              style={tw`text-blue-950
                            text-[21px] font-semibold`}>
              Task Kamu
            </Text>
            <Text
              style={tw`text-2xl text-pink-400
                            text-[14px] `}>
              Lihat semua
            </Text>
          </View>
          <ScrollView
            style={tw`w-96`}
            vertical={true}
            showsVerticalScrollIndicator={false}>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
          </ScrollView>
        </View>
        
      
        {/* End Hero */}
      </View>
    );
};
