import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const handleTextChange = (input) => {
    setText(input);
    console.log(input); // Logs the entered text
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Type here..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default App;
