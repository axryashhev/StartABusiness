import React from 'react';
import {
  Text,
  FlatList,
  Animated,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import {ItemCard} from './ItemCard';
import SearchBar from 'react-native-search-bar';

export class CardList extends React.Component {
  static propTypes = {
    itemProps: PropTypes.shape(ItemCard.propTypes),

    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        picture: PropTypes.any,
        content: PropTypes.func,
        record: PropTypes.number,
      }),
    ),

    selected: PropTypes.string,

    listStyle: PropTypes.any,

    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 600,
  };

  _layouts = new Map();

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.cards,
      selected: new Map(),
      zoomedStyle: {},
      maxHeight: 400,
      // isScrollingList: true
      zoomAnim: new Animated.Value(1),
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = ({item, index}) => {
    if (!this._flatList) {
      return;
    }

    if (item.content !== null) {
      item.content();
    } else {
      Linking.openURL('https://www.youtube.com/watch?v=xcPqMiAdX60');
    }
  };

  _onCloseItem = ({item, index}) => {
    this.setState(state => {
      Animated.timing(this.state.zoomAnim, {
        toValue: 1,
        duration: this.props.duration,
      }).start();

      return {
        ...state,
        selected: new Map(),
        zoomedStyle: {
          transform: [{scale: this.state.zoomAnim}, {translateY: 0}],
        },
      };
    });
  };

  _renderItem = ({item, index}) => (
    <ItemCard
      onLayout={e => this._layouts.set(item.id, e.nativeEvent.layout)}
      title={item.title}
      picture={item.picture}
      content={item.content}
      onPress={() => this._onPressItem({item, index})}
      onClose={() => this._onCloseItem({item, index})}
      maxHeight={this.state.maxHeight}
      selected={this.state.selected.get(item.id)}
      heightDuration={this.props.duration}
    />
  );

  render() {
    return (
      <Animated.View style={[{flex: 1}, this.state.zoomedStyle]}>
        <FlatList
          ref={c => (this._flatList = c)}
          style={[
            {
              flex: 1,
            },
            this.props.listStyle,
          ]}
          data={this.state.data}
          scrollEnabled={true}
          // onScrollBeginDrag={() => this.setState({isScrollingList: true})}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          extraData={this.props.cards}
          // stickyHeaderIndices={[0]}
          ListHeaderComponent={this._renderHeader()}
        />
      </Animated.View>
    );
  }

  /* Поиск камер */
  searchFilterFunction(text) {
    if (isFinite(text) && text !== '' && text <= this.props.cards.length) {
      let list = [];

      for (let i = 0; i < parseInt(text); i++) {
        list.push(this.props.cards[i]);
      }

      this.setState({
        data: list,
      });
    } else {
      const newData = this.props.cards.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;

        const textData = text.toUpperCase();

        return itemData.startsWith(textData);
      });

      if (!newData.length) {
        let list = [];

        this.setState({data: list});
      }
    }
  }

  _renderHeader() {
    // if (this.state.isScrollingList === true) {
    /* return (
      <SearchBar
        textFieldBackgroundColor="#615772"
        placeholder="Введите название камеры"
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    ); */
    /* } else {
      return null;
    } */
  }
}
