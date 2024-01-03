import React from 'react';
import {View} from 'react-native';
import { Home } from './component/page/Home';
import tw from 'twrnc';

export default function App() {
    return (

        <View style={tw`w-full`}>
            <Home/>

        </View>
    );
}
