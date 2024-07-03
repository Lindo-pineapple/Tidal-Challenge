import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  customText: {
    color: 'teal',
    fontSize: 30,
    fontFamily: 'AvenirLTProRoman',
  },
});

function DummyFumc() {
  return (
    <View style={styles.main}>
      <Text style={styles.customText}>Hello Lindo To React Native</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DummyFumc} />
        <Tab.Screen name="Settings" component={DummyFumc} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
