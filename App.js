import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoDetailScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faeeff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
