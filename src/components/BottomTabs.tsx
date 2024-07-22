import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import Ant from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function TabBar(props: {comp: React.FunctionComponent<{}>}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveBackgroundColor: 'black',
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => <Feather name="home" size={36} color="#00e6b8" />,
        }}
      />
      <Tab.Screen
        name="Video"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => (
            <SimpleLine name="social-youtube" size={36} color="#B3B0C3" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => <Ant name="search1" size={36} color="#B3B0C3" />,
        }}
      />
      <Tab.Screen
        name="Charts"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => (
            <Feather name="bar-chart-2" size={36} color="#B3B0C3" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="account-circle-outline" size={36} color="#B3B0C3" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
