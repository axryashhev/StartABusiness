import React from 'react';
import {
  Animated,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableHighlight,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';

export class ItemCard extends React.Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    height: PropTypes.number,
    maxHeight: PropTypes.number,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    onClose: PropTypes.func,

    activeOpacity: PropTypes.number,

    shrinkTo: PropTypes.number,
    shrinkDuration: PropTypes.number,
    heightDuration: PropTypes.number,

    borderRadius: PropTypes.number,

    textStyle: PropTypes.any,

    closeIcon: PropTypes.element,

    content: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      heightAnim: new Animated.Value(this.props.height || 200),
      scaleAnim: new Animated.Value(1),
      selected: this.props.selected,
    };
  }

  _onPresIn = () => {
    if (this.props.selected) {
      return;
    }
  };

  onPressUrl() {}

  _onPressOut = () => {
    if (this.props.selected) {
      return;
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && !this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.maxHeight || 400,
        duration: nextProps.heightDuration || 260,
      }).start();
    }

    if (!nextProps.selected && this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.height || 200,
        duration: nextProps.heightDuration || 260,
      }).start();
    }
  }

  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity || 0.8}
        onPressIn={this._onPresIn}
        onPressOut={this._onPressOut}
        onPress={this.props.onPress}>
        <Animated.View
          style={[
            styles.container,
            this.props.style,
            this.props.borderRadius
              ? {borderRadius: this.props.borderRadius}
              : {},
            {
              transform: [{scale: this.state.scaleAnim}],
              height: this.state.heightAnim,
            },
          ]}>
          <ImageBackground
            onLayout={this.props.onLayout}
            borderRadius={this.props.selected ? 0 : 0}
            source={this.props.picture}
            style={[
              styles.image,
              {height: this.props.height || 200, width: screenWidth},
            ]}>
            {this.props.title !== '' ? (
              <ImageBackground
                style={{
                  height: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
                resizeMode="stretch"
                source={require('../Resources/Images/background_card_text.png')}>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      styles.text,
                      this.props.textStyle,
                      {
                        fontFamily: 'MyriadPro-SemiCond',
                        color: 'black',
                        fontSize: 16,
                      },
                    ]}>
                    {this.props.title}
                  </Text>
                </View>
              </ImageBackground>
            ) : null}
            {this.props.selected ? (
              <TouchableWithoutFeedback onPress={this.props.onClose}>
                <View
                  style={{
                    position: 'absolute',
                    top: 125,
                    right: 26,
                    backgroundColor: '#ffffff',
                  }}>
                  {this.props.closeIcon || <Text>X</Text>}
                </View>
              </TouchableWithoutFeedback>
            ) : null}
          </ImageBackground>

          {this.props.selected ? this.props.content : null}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 0,
  },
  image: {
    width: undefined,
    height: 200,
    margin: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonPlay: {
    backgroundColor: '#00b5ec',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    // fontWeight: '700',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#ffffff',
  },
});
