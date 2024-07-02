/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'AvenirLTProRoman',
  },
});

function App(): React.JSX.Element {
  return (
    <View style={styles.main}>
      <Text>Hello Lindo To React Native</Text>
    </View>
  );
}

export default App;
