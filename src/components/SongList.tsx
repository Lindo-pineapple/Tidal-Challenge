import {StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    width: '100%',
    height: 160,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  titleContainer: {
    left: 20,
    width: '80%',
  },
  songNumber: {
    color: '#B3B0C3',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    width: '5%',
    top: 15,
    left: 10,
    textAlign: 'center',
  },
  songText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProBlack',
    top: 5,
  },
  artistText: {
    color: '#B3B0C3',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    top: 10,
  },
  options: {
    top: 15,
  },
});

export default function SongList(this: any) {
  const songs = [
    {number: 1, title: 'Stenio Keytar', artist: 'High Klassified'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
  ];

  const Song = (song: {number: number; title: string; artist: string}) => (
    <SafeAreaView style={styles.row} key={song.number}>
      <Text style={styles.songNumber}>{song.number}</Text>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.songText}>{song.title}</Text>
        <Text style={styles.artistText}>{song.artist}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.options}>
        <IconButton iconName="dots-horizontal" size={33} color="#B3B0C3" />
      </SafeAreaView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={songs}
        renderItem={({item}) => (
          <Song title={item.title} number={item.number} artist={item.artist} />
        )}
      />
    </SafeAreaView>
  );
}
