import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {createBottomTabNavigator,createStackNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeSreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainScreen = createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: createStackNavigator({
        review: ReviewScreen,
        settings: SettingsScreen
      })
    });
    MainScreen.navigationOptions = {tabBarVisible:false};
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen,
      main:MainScreen
    });
    const NavContainer = createAppContainer(MainNavigator);
    return (
      <Provider store = {store}>
      <NavContainer/>  
      </Provider>
            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
