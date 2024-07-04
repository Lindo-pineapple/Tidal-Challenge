import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import IconButton from './src/components/IconButton';
import MediaPlayerBar from './src/components/MediaPlayerBar';
import SongList from './src/components/SongList';
import AlbumOptionsBar from './src/components/AlbumOptionBar';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  navStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 80,
    margin: 10,
  },
  mediaPlayer: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 60,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  customText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'AvenirLTProRoman',
  },
});

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex: 2, backgroundColor: 'black'}} />
      <AlbumOptionsBar />
      <SongList />
      <SafeAreaView style={styles.mediaPlayer}>
        <MediaPlayerBar />
      </SafeAreaView>
      <SafeAreaView style={styles.navStyles}>
        <IconButton iconName="home-variant-outline" size={45} color="teal" />
        <IconButton iconName="youtube" size={45} color="grey" />
        <IconButton iconName="magnify" size={45} color="grey" />
        <IconButton iconName="chart-bar" size={45} color="grey" />
        <IconButton iconName="account-circle-outline" size={45} color="grey" />
      </SafeAreaView>
    </SafeAreaView>
  );
}
