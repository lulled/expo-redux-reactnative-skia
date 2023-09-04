import {Provider} from 'react-redux';
import store from './grobal-state/Store';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppStack';
import * as NavigationBar  from 'expo-navigation-bar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
    <Provider store={store}>
    <AppStack />
    </Provider>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

