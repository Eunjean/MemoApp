import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 50,
    height: 50,
    backgroundColor: '#e371d4',
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
