import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  buttonBarStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80,
    backgroundColor: 'black',
    marginTop: 10,
  },
  buttonPlay: {
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  buttonShuffle: {
    width: '45%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    backgroundColor: '#333333',
    borderRadius: 15,
  },
  playLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
    marginHorizontal: 5,
  },
  shuffleLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AvenirLTProRoman',
    marginHorizontal: 10,
  },
  Icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function PlayShuffleButtons() {
  return (
    <SafeAreaView style={styles.buttonBarStyles}>
      <TouchableOpacity style={styles.buttonPlay}>
        <SafeAreaView style={styles.Icons}>
          <Icon name="play" size={30} color="black" />
          <Text style={styles.playLabel}>Play</Text>
        </SafeAreaView>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonShuffle}>
        <SafeAreaView style={styles.Icons}>
          <Icon name="shuffle" size={27} color="white" />
          <Text style={styles.shuffleLabel}>Shuffle</Text>
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
