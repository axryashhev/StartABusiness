import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  EntityNavigator,
  HomeNavigator,
  ProfileNavigator,
  SearchNavigator,
} from './screen-stack-navigators';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'ios-home';
  } else if (routeName === 'Profile') {
    iconName = 'ios-contact';
  } else if (routeName === 'Search') {
    iconName = 'ios-search';
  }

  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    // Entity: EntityNavigator,
    Profile: ProfileNavigator,
    Search: SearchNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default BottomTabNavigator;
