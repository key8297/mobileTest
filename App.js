import { StackNavigator } from 'react-navigation';
import Question from './src/question';
import Login from './src/login';
import {Platform} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default StackNavigator({
  Home: {
    screen: Question,
  },
  Question: {
    screen: Question,
  },
  initialRouteName : Question
});
