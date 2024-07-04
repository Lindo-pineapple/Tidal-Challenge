import {StyleSheet, View, Text} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: '100%',
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
    padding: 20,
  },
  songText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
  artistText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
  options: {
    right: 20,
    top: 20,
  },
});

export default function SongList(this: any) {
  const songs = [
    {number: 1, title: 'Stenio Keytar', artist: 'High Klassified'},
    {number: 2, title: 'Come Over', artist: 'High Klassified, Leaf'},
  ];
  return (
    <View style={styles.list}>
      {songs.map(song => (
        <View style={styles.row} key={song.number}>
          <Text style={styles.songNumber}>{song.number}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.songText}>{song.title}</Text>
            <Text style={styles.artistText}>{song.artist}</Text>
          </View>
          <View style={styles.options}>
            <IconButton iconName="dots-horizontal" size={35} color="grey" />
          </View>
        </View>
      ))}
    </View>
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
