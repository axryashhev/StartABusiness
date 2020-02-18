import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {MenuButton, Logo} from '../components/header/header';
import {CardList} from '../../CardList/CardList';
import screen_info from './screen_info';

export default class PrivateEntrepreneurScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo title={screen_info.PrivateEntrepreneur} />,
      headerBackTitle: screen_info.PrivateEntrepreneur,
      headerLayoutPreset: 'center',
    };
  };
  render() {
    const cards = [
      {
        id: '0',
        title: 'Регистрация',
        picture: require('../../Resources/Images/StockSnap_42H3JH8QI5.jpg'),
        content: () => null,
      },
      {
        id: '1',
        title: 'Выбор системы налогооблажения',
        picture: require('../../Resources/Images/StockSnap_SWRREC0K3A.jpg'),
        content: null,
      },
      {
        id: '2',
        title: 'Сдача отчетности',
        picture: require('../../Resources/Images/StockSnap_JUKLWV1AXI.jpg'),
        content: null,
      },
      {
        id: '3',
        title: 'Ликвидация',
        picture: require('../../Resources/Images/StockSnap_V0AKCFV9QX.jpg'),
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
