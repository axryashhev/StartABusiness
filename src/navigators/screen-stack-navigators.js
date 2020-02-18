import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import EntityScreen from '../screens/EntityScreen';
import PrivateEntrepreneurScreen from '../screens/PrivateEntrepreneurScreen';
import IndividualScreen from '../screens/IndividualScreen';

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

export const EntityNavigator = createStackNavigator({
  Entity: {screen: EntityScreen},
});

export const PrivateEntrepreneurNavigator = createStackNavigator({
  PrivateEntrepreneur: {screen: PrivateEntrepreneurScreen},
});

export const IndividualNavigator = createStackNavigator({
  Individual: {screen: IndividualScreen},
});

export const SettingsNavigator = createStackNavigator({
  Settings: {screen: SettingsScreen},
});

export const ProfileNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen},
});

export const SearchNavigator = createStackNavigator({
  Search: {screen: SearchScreen},
});
