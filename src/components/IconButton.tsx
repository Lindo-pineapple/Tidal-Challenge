import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 60,
    margin: 10,
    bottom: 10,
  },
});

export default function IconButton(props: {iconName: string; color?: string}) {
  return (
    <View style={styles.buttonStyles}>
      <Icon name={props.iconName} size={50} color={props.color} />
    </View>
  );
}
