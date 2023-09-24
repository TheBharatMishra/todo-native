import React, {useState} from 'react';
import {Pressable, Text, View, TextInput, Alert} from 'react-native';
import {s} from 'react-native-wind';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}: any) {
  const [userName, setUser] = useState('');
  const [userPass, setPass] = useState('');
  const setData = async () => {
    if (userName.length <= 0 || userPass.length <= 0) {
      Alert.alert('Enter a valid username or password');
    } else {
      try {
        // setUser(userName);
        await AsyncStorage.setItem('userName', userName);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
      // setPass(userPass);
    }
  };
  return (
    <View style={s`h-full bg-pink-200 flex justify-start items-center`}>
      <View
        style={s`flex justify-start items-center bg-pink-600 h-1/2 top-4 w-72 rounded-lg`}>
        <Text style={s`text-center text-5xl`}>LOGIN</Text>
        <Text style={s`text-center text-2xl`}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={s`border border-pink-500 w-1/2 rounded-lg`}
          onChangeText={value => setUser(value)}
        />
        <Text style={s`text-center text-2xl`}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={s`border border-pink-500 w-1/2 rounded-lg`}
          onChangeText={value => setPass(value)}
        />
        <Pressable
          style={s`bg-pink-500 w-1/2 p-4 bottom-0 mt-4 rounded-lg`}
          onPress={setData}>
          <Text style={s`text-center`}>LOGIN</Text>
        </Pressable>
      </View>
      <Pressable
        style={s`bg-pink-500 w-1/2 p-4 absolute bottom-2`}
        onPress={() => navigation.navigate('Home')}>
        <Text style={s`text-center`}>Back to Home</Text>
      </Pressable>
    </View>
  );
}
