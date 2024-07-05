import React from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import IconButton from './src/components/IconButton';
import MediaPlayerBar from './src/components/MediaPlayerBar';
import SongList from './src/components/SongList';
import AlbumOptionsBar from './src/components/AlbumOptionBar';
import PlayShuffleButtons from './src/components/PlayShuffleButtons';
import AlbumDetails from './src/components/AlbumDetails';

const styles = StyleSheet.create({
  main: {
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  navStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 50,
    bottom: Platform.OS == 'ios' ? 0 : 10,
  },
  customText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'AvenirLTProRoman',
  },
});

export default function App() {
  return (
    <SafeAreaView style={[styles.main]}>
      <SafeAreaView style={{flex: 2, backgroundColor: 'black'}}>
        <AlbumDetails />
      </SafeAreaView>
      <PlayShuffleButtons />
      <AlbumOptionsBar />
      <SongList />
      <MediaPlayerBar />
      <SafeAreaView style={styles.navStyles}>
        <IconButton iconName="home-variant-outline" size={45} color="#00e6b8" />
        <IconButton iconName="youtube" size={45} color="grey" />
        <IconButton iconName="magnify" size={45} color="grey" />
        <IconButton iconName="chart-bar" size={45} color="grey" />
        <IconButton iconName="account-circle-outline" size={45} color="grey" />
      </SafeAreaView>
    </SafeAreaView>
  );
}
