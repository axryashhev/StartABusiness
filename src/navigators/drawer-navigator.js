import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BottomTabNavigator from './bottom-tab-navigator';
import {
  EntityNavigator,
  IndividualNavigator,
  PrivateEntrepreneurNavigator,
  SettingsNavigator,
} from './screen-stack-navigators';

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens,
        there must be a navigator that includes the screen you want to add to the drawer navigator.
        See 'screen-stack-navigator' file*/
  Home: BottomTabNavigator,
  Entity: EntityNavigator,
  PrivateEntrepreneur: PrivateEntrepreneurNavigator,
  Settings: SettingsNavigator,
  Individual: IndividualNavigator,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
