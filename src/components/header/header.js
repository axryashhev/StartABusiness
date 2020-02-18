import React from 'react';
import {Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Add your logo in the image tag
      <View style={{flex: 0.8, alignItems: 'center'}}>
        <Text style={{width: 140, alignSelf: 'center'}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export class MenuButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon
          name="md-menu"
          size={30}
          style={{color: 'black', paddingLeft: 10}}
        />
      </TouchableOpacity>
    );
  }
}
