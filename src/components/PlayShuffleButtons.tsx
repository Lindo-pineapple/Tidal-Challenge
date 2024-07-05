import {SafeAreaView, StyleSheet, Text} from 'react-native';
import IconButton from './IconButton';

const styles = StyleSheet.create({
  buttonBarStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 80,
    bottom: 10,
  },
  buttonPlay: {
    paddingTop: 10,
    paddingRight: 15,
    top: 5,
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttonShuffle: {
    paddingRight: 15,
    paddingTop: 10,
    top: 5,
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#505050',
    borderRadius: 20,
  },
  playLabel: {
    top: 3,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
  },
  shuffleLabel: {
    top: 3,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
  },
});

export default function PlayShuffleButtons() {
  return (
    <SafeAreaView style={styles.buttonBarStyles}>
      <SafeAreaView style={styles.buttonPlay}>
        <IconButton iconName="play" size={35} color="black" />
        <Text style={styles.playLabel}>Play</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonShuffle}>
        <IconButton iconName="shuffle" size={35} color="white" />
        <Text style={styles.shuffleLabel}>Shuffle</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
