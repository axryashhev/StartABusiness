import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {MenuButton, Logo} from '../components/header/header';
import {CardList} from '../../CardList/CardList';
import screen_info from './screen_info';

export default class IndividualScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo title={screen_info.Individual} />,
      headerBackTitle: screen_info.Individual,
      headerLayoutPreset: 'center',
    };
  };
  render() {
    const cards = [
      {
        id: '0',
        title: 'сдать 3 НДФЛ',
        picture: require('../../Resources/Images/StockSnap_LPLPKWISYS.jpg'),
        content: () => null,
      },
      {
        id: '1',
        title: 'Зарегистрировать ИП',
        picture: require('../../Resources/Images/StockSnap_WQ2JMRIIQB.jpg'),
        content: null,
      },
    ];
    return (
      <View style={styles.MainContainer}>
        <CardList cards={cards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
