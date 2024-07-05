import {StyleSheet, Text, SafeAreaView} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: '100%',
    bottom: 20,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  titleContainer: {
    left: 20,
    width: '80%',
  },
  songNumber: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    padding: 10,
  },
  songText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
  artistText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
  options: {
    top: 20,
  },
});

export default function SongList(this: any) {
  const songs = [
    {number: 1, title: 'Stenio Keytar', artist: 'High Klassified'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
  ];
  return (
    <SafeAreaView style={styles.list}>
      {songs.map(song => (
        <SafeAreaView style={styles.row} key={song.number}>
          <Text style={styles.songNumber}>{song.number}</Text>
          <SafeAreaView style={styles.titleContainer}>
            <Text style={styles.songText}>{song.title}</Text>
            <Text style={styles.artistText}>{song.artist}</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.options}>
            <IconButton iconName="dots-horizontal" size={35} color="grey" />
          </SafeAreaView>
        </SafeAreaView>
      ))}
    </SafeAreaView>
  );
}

{
  /* <View style={styles.row}>
<Text style={styles.songNumber}>1</Text>
<View style={styles.titleContainer}>
  <Text style={styles.songText}>Stenio Keytar</Text>
  <Text style={styles.artistText}>High Klassified</Text>
</View>
<View style={styles.options}>
  <IconButton iconName="dots-horizontal" size={35} color="grey" />
</View>
</View>

<View style={styles.row}>
<Text style={styles.songNumber}>2</Text>
<View style={styles.titleContainer}>
  <Text style={styles.songText}>Stenio Keytar</Text>
  <Text style={styles.artistText}>High Klassified</Text>
</View>
<View style={styles.options}>
  <IconButton iconName="dots-horizontal" size={35} color="grey" />
</View>
</View> */
}
