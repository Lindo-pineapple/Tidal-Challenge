import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';
import IconButton from '../components/IconButton';

const imageSource = require('../../assets/images/album_cover.jpg');
const backgroundImage = require('../../assets/images/album_cover_stretched.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'stretch',
    height: null,
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: null,
    textAlign: 'center',
    margin: 10,
  },
  displayContent: {
    flexDirection: 'row',
    resizeMode: 'cover',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000d0',
  },
  content: {
    flexDirection: 'column',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    left: 20,
  },
  image: {
    height: 250,
    width: 250,
    margin: 20,
    top: 10,
  },
  backButton: {
    right: 20,
    bottom: Platform.OS == 'ios' ? 10 : 0,
  },
  options: {
    alignSelf: 'auto',
    bottom: Platform.OS == 'ios' ? 10 : 0,
  },
  albumTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    left: 100,
  },
  artist: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    left: 30,
  },
  details: {
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 10 : 0,
  },
  year: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    left: 90,
  },
  resolution: {
    color: 'teal',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    left: 120,
  },
});

export default function MediaPlayerBar() {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <SafeAreaView style={styles.displayContent}>
        <SafeAreaView style={styles.backButton}>
          <IconButton iconName="chevron-left" size={35} color="white" />
        </SafeAreaView>
        <SafeAreaView style={styles.content}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.albumTitle}>Kanvaz</Text>
          <Text style={styles.artist}>Album by High Klassified</Text>
          <SafeAreaView style={styles.details}>
            <Text style={styles.year}>2018</Text>
            <Text style={styles.resolution}>HIGH</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.options}>
          <IconButton iconName="dots-horizontal" size={35} color="white" />
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}
