import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    bottom: 30,
  },
  image: {
    height: 70,
    width: 70,
    left: 15,
  },
  titleContainer: {
    left: 45,
    top: 5,
  },
  playButtons: {
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    top: 10,
  },
  songText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
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
    <SafeAreaView style={styles.bar}>
      <Image source={imageSource} style={styles.image} />
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.songText}>Intro (Robert Glasper x KAYTRANADA)</Text>
        <Text style={styles.artistText}>Robert Glasper Experiment</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.playButtons}>
        <IconButton iconName="play" size={35} color="white" />
        <IconButton iconName="skip-next" size={35} color="white" />
      </SafeAreaView>
    </SafeAreaView>
  );
}
