import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {s} from 'react-native-wind';

const Splash = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('Section', {name: 'Section'});
  }, 2000);
  return (
    <View style={s`bg-yellow-500 h-full`}>
      <Text
        style={s`p-5 text-5xl font-poppins italic bg-pink-500 line-through text-decoration-dotted text-green-500 lowercase`}>
        John Cena is
        <Text
          style={s`p-5 text-8xl font-serif bold underline text-decoration-dotted font-bold text-black uppercase `}>
          Lesbian
        </Text>
      </Text>
      <TouchableHighlight
        onPress={() => navigation.replace('Section', {name: 'Section'})}>
        <Image style={s`w-full h-screen`} source={require('./doom.jpg')} />
      </TouchableHighlight>
    </View>
  );
};

export default Splash;
