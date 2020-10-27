import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;
