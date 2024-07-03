import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  customText: {
    color: 'teal',
    fontSize: 50,
    fontFamily: 'AvenirLTProRoman',
  },
});

function IconButton(props: {iconName: string; color?: string}) {
  return (
    <View style={styles.buttonStyles} testID={'navigateBack'}>
      <Icon name={props.iconName} size={50} color={props.color} />
    </View>
  );
}

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'black'}} />
      <View style={{flex: 2, backgroundColor: 'white'}} />
      <View style={styles.buttonStyles}>
        <IconButton iconName="home-variant-outline" color="teal" />
        <IconButton iconName="youtube" color="grey" />
        <IconButton iconName="magnify" color="grey" />
        <IconButton iconName="chart-bar" color="grey" />
        <IconButton iconName="account-circle-outline" color="grey" />
      </View>
    </View>
  );
}
