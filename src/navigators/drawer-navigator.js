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
import screen_info from '../screens/screen_info';

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens,
        there must be a navigator that includes the screen you want to add to the drawer navigator.
        See 'screen-stack-navigator' file*/
  'Начать бизнес': BottomTabNavigator,
  'Юридическое лицо': EntityNavigator,
  'Индивидуальный предприниматель': PrivateEntrepreneurNavigator,
  'Физическое лицо': IndividualNavigator,
  Settings: SettingsNavigator,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
