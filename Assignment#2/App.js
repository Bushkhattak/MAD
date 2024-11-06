import React from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './components/Display';
import Button from './components/Button';

const App = () => {
  const buttons = ['C', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <View style={styles.container}>
      <Display />
      <View style={styles.buttons}>
        {buttons.map(label => (
          <Button key={label} label={label} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
