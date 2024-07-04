import {Image, StyleSheet, View, Text} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 60,
    width: '100%',
  },
  image: {
    height: 70,
    width: 75,
    left: 15,
  },
  titleContainer: {
    left: 55,
  },
  playButtons: {
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
  },
  songText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
  artistText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    top: 5,
  },
});

export default function MediaPlayerBar() {
  const imageSource = require('../../assets/images/intro.jpg');
  return (
    <View style={styles.bar}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.songText}>Intro (Robert Glasper x KAYTRANADA)</Text>
        <Text style={styles.artistText}>Robert Glasper Experiment</Text>
      </View>
      <View style={styles.playButtons}>
        <IconButton iconName="play" size={35} color="white" />
        <IconButton iconName="skip-next" size={35} color="white" />
      </View>
    </View>
  );
}
