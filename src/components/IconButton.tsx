import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    height: 60,
    margin: 10,
    bottom: 10,
  },
});

export default function IconButton(props: {
  iconName: string;
  color?: string;
  size: number;
}) {
  return (
    <TouchableOpacity style={styles.buttonStyles}>
      <Icon name={props.iconName} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
}
