import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          tabBarIcon: ({}) => (
            <Icon name="home-variant-outline" size={38} color="#00e6b8" />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => <Icon name="youtube" size={38} color="grey" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => <Icon name="magnify" size={38} color="grey" />,
        }}
      />
      <Tab.Screen
        name="Charts"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => <Icon name="chart-bar" size={38} color="grey" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={props.comp}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="account-circle-outline" size={38} color="grey" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
