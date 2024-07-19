import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import IconButton from './IconButton';

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 80,
    width: '100%',
  },
  optionIcon: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  iconLabel: {
    color: 'white',
    bottom: 45,
  },
});

export default function AlbumOptionsBar() {
  return (
    <SafeAreaView style={styles.buttonStyles}>
      <SafeAreaView style={styles.optionIcon}>
        <IconButton iconName="cards-heart-outline" size={30} color="white" />
        <Text style={styles.iconLabel}>Add</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.optionIcon}>
        <IconButton iconName="information-outline" size={30} color="white" />
        <Text style={styles.iconLabel}>Credits</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.optionIcon}>
        <IconButton
          iconName="download-circle-outline"
          size={30}
          color="white"
        />
        <Text style={styles.iconLabel}>Download</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.optionIcon}>
        <IconButton iconName="upload" size={30} color="white" />
        <Text style={styles.iconLabel}>Share</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
