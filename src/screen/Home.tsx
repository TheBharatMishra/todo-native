import {View, TouchableHighlight, Text} from 'react-native';
import {useState, useEffect} from 'react';
import {s} from 'react-native-wind';
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage/';

export default function Home({navigation}: any): JSX.Element {
  const [userName, setUser] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('userName').then(value => {
        if (value != null) {
          setUser(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={s`bg-yellow-500 h-full flex justify-center items-center `}>
      <Text
        style={[
          s`text-black text-5xl text-center m-4 stroke-white`,
          GlobalStyle.globalFont,
        ]}>
        Welcome {userName} to the Home Screen
      </Text>
      <Text style={s`text-2xl text-center text-black font-bold`}>
        In order to get access to features please Login
      </Text>
      <TouchableHighlight
        style={s`p-4 m-2 bg-black w-1/3 flex justify-center items-center rounded-lg`}
        onPress={() =>
          //   navigation.replace('Splash', {
          //     ItemName: 'Lali lelo aani lelo',
          //     ItemID: 69,
          //   })
          navigation.replace('Login')
        }>
        <Text style={s`text-yellow-500 font-bold text-xl`}>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
}
