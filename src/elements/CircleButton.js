import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome', 'fa-solid-900.ttf');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {
      name, style, color, onPress,
    } = this.props;

    let bgColor = '#e371d4';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e371d4';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 50,
    height: 50,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'FontAwesome',
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});

export default CircleButton;
