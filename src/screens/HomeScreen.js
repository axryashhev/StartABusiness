import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {MenuButton, Logo} from '../components/header/header';
import {CardList} from '../../CardList/CardList';

const cards = [
  {
    id: '0',
    title: 'Юридическое лицо',
    picture: require('../../image/private_entrepreneur.jpg'),
    content: null,
  },
  {
    id: '1',
    title: 'Индивидуальный предприниматель',
    picture: require('../../image/private_entrepreneur.jpg'),
    content: null,
  },
  {
    id: '2',
    title: 'Физическое лицо',
    picture: require('../../image/private_entrepreneur.jpg'),
    content: null,
  },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: 'Home',
      headerLayoutPreset: 'center',
    };
  };

  render() {
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
