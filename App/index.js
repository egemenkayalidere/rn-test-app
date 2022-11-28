import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Redux
import {Provider} from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
