import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BasketScreen, HomeScreen, RestaurantScreen } from './screens';
import { BASKET_PATH, HOME_PATH, RESTAURANT_PATH } from './constants';
import { RootStackParamList } from './App.types';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName={HOME_PATH}>
          <Stack.Screen name={HOME_PATH} component={HomeScreen} />
          <Stack.Screen name={RESTAURANT_PATH} component={RestaurantScreen} />
          <Stack.Screen
            name={BASKET_PATH}
            component={BasketScreen}
            options={{ presentation: 'modal', headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
