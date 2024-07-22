import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: '#262626',
    height: 70,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
  image: {
    height: '100%',
    width: '18%',
    left: 7,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    height: '97%',
    left: 10,
  },
  playButtons: {
    backgroundColor: '#262626',
    alignItems: 'baseline',
    alignContent: 'center',
    justifyContent: 'space-around',
    width: '23%',
    height: '99%',
    paddingHorizontal: 10,
  },
  Iconcontainer: {
    flexDirection: 'row',
    height: '60%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    top: 25,
    right: 15,
    marginHorizontal: 10,
  },
  songText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AvenirLTBlack',
    fontWeight: 'bold',
    width: '100%',
    left: '7%',
  },
  artistText: {
    color: '#B3B0C3',
    fontSize: 15,
    fontFamily: 'AvenirLTProBlack',
    fontWeight: 'bold',
    width: '100%',
    left: '7%',
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
        <SafeAreaView style={styles.Iconcontainer}>
          <IconButton iconName="play" size={32} color="white" />
          <IconButton iconName="skip-next" size={32} color="white" />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
