import {Provider} from 'react-redux';
import store from './grobal-state/Store';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppStack';
export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
    <AppStack />
    </Provider>
    </NavigationContainer>
  );
}

