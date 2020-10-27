import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOYANG</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2020/10/26</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>買い出し</Text>
          <Text style={styles.memoDate}>2020/10/26</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>11月のTODOリスト</Text>
          <Text style={styles.memoDate}>2020/10/26</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2020/10/26</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>レシピ　カルボナーラ</Text>
          <Text style={styles.memoDate}>2020/10/26</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTilte}>+</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faeeff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  memoAddButtonTilte: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
  memoAddButton: {
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
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#8a0c7a',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
