import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
} from 'react-native';
import IconButton from '../components/IconButton';

const imageSource = require('../../assets/images/album_cover.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: '100%',
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
    alignContent: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
  image: {
    height: 230,
    width: 230,
    margin: 20,
    top: 30,
  },
  backButton: {
    right: 30,
    top: 20,
  },
  options: {
    top: 20,
  },
  albumTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    left: 90,
    top: 10,
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
    <ImageBackground source={imageSource} style={styles.container}>
      <SafeAreaView style={styles.displayContent}>
        <SafeAreaView style={styles.backButton}>
          <IconButton iconName="chevron-left" size={35} color="white" />
        </SafeAreaView>
        <SafeAreaView style={styles.content}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.albumTitle}>Kanvaz</Text>
          <Text style={styles.artist}>Album by High Klassified</Text>
          <View style={styles.details}>
            <Text style={styles.year}>2018</Text>
            <Text style={styles.resolution}>HIGH</Text>
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.options}>
          <IconButton iconName="dots-horizontal" size={35} color="white" />
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}
