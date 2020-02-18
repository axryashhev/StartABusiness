import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {MenuButton, Logo} from '../components/header/header';
import {CardList} from '../../CardList/CardList';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo title={'Начать бизнес'} />,
      headerBackTitle: 'Домой',
      headerLayoutPreset: 'center',
    };
  };

  render() {
    const cards = [
      {
        id: '0',
        title: 'Юридическое лицо',
        picture: require('../../Resources/Images/StockSnap_64HTSUARQX.jpg'),
        content: () => this.props.navigation.navigate('Entity'),
      },
      {
        id: '1',
        title: 'Индивидуальный предприниматель',
        picture: require('../../Resources/Images/StockSnap_OERP9XI9YB.jpg'),
        content: () => this.props.navigation.navigate('PrivateEntrepreneur'),
      },
      {
        id: '2',
        title: 'Физическое лицо',
        picture: require('../../Resources/Images/StockSnap_OOZGCFXSSP.jpg'),
        content: () => this.props.navigation.navigate('Individual'),
      },
      {
        id: '3',
        title: 'Самозанятой',
        picture: require('../../Resources/Images/StockSnap_XDR3CTDZ1H.jpg'),
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
