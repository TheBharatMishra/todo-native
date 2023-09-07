import {View, TouchableHighlight, Text} from 'react-native';
import {s} from 'react-native-wind';
import GlobalStyle from '../utils/GlobalStyle';

export default function Clash({navigation}: any): JSX.Element {
  return (
    <View style={s`bg-yellow-500 h-full flex justify-center items-center `}>
      <Text
        style={[
          s`text-black text-5xl text-center m-4 stroke-white`,
          GlobalStyle.globalFont,
        ]}>
        This is Clash Screen
      </Text>
      <TouchableHighlight
        style={s`p-4 m-2 bg-black w-1/3 flex justify-center items-center rounded-lg`}
        onPress={() =>
          //   navigation.replace('Splash', {
          //     ItemName: 'Lali lelo aani lelo',
          //     ItemID: 69,
          //   })
          navigation.replace('Splash')
        }>
        <Text style={s`text-yellow-500 font-bold text-xl`}>Click Me.</Text>
      </TouchableHighlight>
    </View>
  );
}
