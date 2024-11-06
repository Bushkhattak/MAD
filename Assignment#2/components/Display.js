import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Display = () => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>123,456.23</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 48,
  },
});

export default Display;
