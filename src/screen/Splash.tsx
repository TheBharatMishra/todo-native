import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {s} from 'react-native-wind';

const Splash = ({navigation, route}: any) => {
  // const {ItemName, ItemID} = route.params;
  setTimeout(() => {
    navigation.navigate('Section', {name: 'Section'});
  }, 5000);
  return (
    <View style={s`bg-yellow-500 h-full`}>
      <Text
        onPress={() => navigation.setParams({ItemID: 13})}
        style={s`p-5 text-5xl font-poppins italic bg-pink-500 line-through text-decoration-dotted text-green-500 lowercase`}>
        John Cena is
        <Text
          style={s`p-5 text-8xl font-serif bold underline text-decoration-dotted font-bold text-black uppercase `}>
          Lesbian
        </Text>
      </Text>
      <TouchableHighlight
        onPress={() => navigation.replace('Section', {name: 'Section'})}>
        <View>
          <Text style={s`text-5xl flex-8 `}>This is shuffle gang Member:</Text>
          {/* <Text style={s`text-5xl flex-8 `}>
            {ItemName} {ItemID}
          </Text> */}
          <Image style={s`w-full`} source={require('../../assets/doom.jpg')} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Splash;
