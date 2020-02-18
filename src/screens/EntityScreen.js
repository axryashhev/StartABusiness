import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {MenuButton, Logo} from '../components/header/header';
import {CardList} from '../../CardList/CardList';
import screen_info from './screen_info';

export default class EntityScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo title={screen_info.Entity} />,
      headerBackTitle: screen_info.Entity,
      headerLayoutPreset: 'center',
    };
  };
  render() {
    const cards = [
      {
        id: '0',
        title: 'Регистрация',
        picture: require('../../Resources/Images/StockSnap_MOK9SCVSIP.jpg'),
        content: () => this.props.navigation.navigate('Home'),
      },
      {
        id: '1',
        title: 'Выбор системы налогооблажения',
        picture: require('../../Resources/Images/StockSnap_LPPN6E2YK4.jpg'),
        content: null,
      },
      {
        id: '2',
        title: 'Сдача отчетности',
        picture: require('../../Resources/Images/StockSnap_KCIU8RWM09.jpg'),
        content: null,
      },
      {
        id: '3',
        title: 'Ликвидация',
        picture: require('../../Resources/Images/StockSnap_Y9UAO6CRX3.jpg'),
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
