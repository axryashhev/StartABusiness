import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Linking,
} from 'react-native';
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
        content: null,
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
        <FlatList
          data={cards}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                margin: 1,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#000',
              }}>
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                onPress={() =>
                  Linking.openURL('https://www.youtube.com/watch?v=xcPqMiAdX60')
                }>
                <Image style={styles.imageThumbnail} source={item.picture} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  itemTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding: 10,
  },
});
