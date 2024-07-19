import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import IconButton from '../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const imageSource = require('../../assets/images/album_cover.jpg');
const backgroundImage = require('../../assets/images/album_cover_stretched.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    width: '100%',
    textAlign: 'center',
  },
  displayContent: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000d0',
  },
  content: {
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20,
  },
  image: {
    height: 200,
    width: 200,
    top: 10,
  },
  backButton: {
    alignSelf: 'auto',
  },
  options: {
    alignSelf: 'auto',
  },
  albumTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    textAlign: 'center',
  },
  artist: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    bottom: 10,
  },
  artistText: {
    color: '#999999',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    bottom: 20,
  },
  year: {
    color: '#999999',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
  },
  resolution: {
    color: '#00e6b8',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTProRoman',
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
          <SafeAreaView style={styles.artist}>
            <Text style={styles.artistText}>Album by High Klassified</Text>
            <Icon name="chevron-right" size={28} color="#999999" />
          </SafeAreaView>
          <SafeAreaView style={styles.details}>
            <Text style={styles.year}>2018 {'      '}</Text>
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
