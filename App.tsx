import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MediaPlayerBar from './src/components/MediaPlayerBar';
import SongList from './src/components/SongList';
import AlbumOptionsBar from './src/components/AlbumOptionBar';
import PlayShuffleButtons from './src/components/PlayShuffleButtons';
import AlbumDetails from './src/components/AlbumDetails';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './src/components/BottomTabs';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
  navStyles: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    alignItems: 'baseline',
    width: '100%',
    height: 60,
  },
  customText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'AvenirLTProRoman',
  },
});

export function Main() {
  return (
    <SafeAreaView style={[styles.main]}>
      <AlbumDetails />
      <PlayShuffleButtons />
      <AlbumOptionsBar />
      <SongList />
      <MediaPlayerBar />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabBar comp={Main} />
    </NavigationContainer>
  );
}

{
  /* <SafeAreaView style={styles.navStyles}>
<IconButton iconName="home-variant-outline" size={38} color="#00e6b8" />
<IconButton iconName="youtube" size={38} color="grey" />
<IconButton iconName="magnify" size={38} color="grey" />
<IconButton iconName="chart-bar" size={38} color="grey" />
<IconButton iconName="account-circle-outline" size={38} color="grey" />
</SafeAreaView> */
}
function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}
