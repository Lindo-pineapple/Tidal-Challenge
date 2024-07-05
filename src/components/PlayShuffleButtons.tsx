import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import IconButton from './IconButton';

const styles = StyleSheet.create({
  buttonBarStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    height: 80,
    bottom: Platform.OS == 'ios' ? 10 : 40,
  },
  buttonPlay: {
    paddingRight: 15,
    top: 30,
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  buttonShuffle: {
    paddingRight: 15,
    top: 30,
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 15,
  },
  playLabel: {
    top: 12,
    right: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
  },
  shuffleLabel: {
    top: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
  },
  Icons: {
    top: 10,
  },
});

export default function PlayShuffleButtons() {
  return (
    <SafeAreaView style={styles.buttonBarStyles}>
      <TouchableOpacity style={styles.buttonPlay}>
        <SafeAreaView style={styles.Icons}>
          <IconButton iconName="play" size={30} color="black" />
        </SafeAreaView>
        <Text style={styles.playLabel}>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonShuffle}>
        <SafeAreaView style={styles.Icons}>
          <IconButton iconName="shuffle" size={30} color="white" />
        </SafeAreaView>
        <Text style={styles.shuffleLabel}>Shuffle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
