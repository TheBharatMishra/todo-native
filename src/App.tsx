/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {s} from 'react-native-wind';
import {SafeAreaView, Text, View, Button} from 'react-native';
import Clash from './screen/Clash';
import Splash from './screen/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const Stack = createNativeStackNavigator();

function Section({navigation}: any): JSX.Element {
  return (
    <View style={s`bg-yellow-500 h-full`}>
      <Text style={s`text-xl text-white dark:text-white `}>Hellow</Text>
      <Button
        color={'red'}
        title="Go to Splash"
        onPress={() => navigation.replace('Splash', {name: 'Splash'})}
      />
      <Button
        color={'pink'}
        title="Go to Clash"
        onPress={() =>
          navigation.replace('Clash', {
            name: 'Clash',
          })
        }
      />
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Section"
          component={Section}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          options={{header: () => null, animation: 'slide_from_left'}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{header: () => null, animation: 'slide_from_bottom'}}
          name="Clash"
          component={Clash}
        />
        {/* 
        <SafeAreaView style={s``}>
          <View>
            <Splash />
            {/* <Section /> */}
        {/* </View> */}
        {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
