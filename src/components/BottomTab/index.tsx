import React from 'react';
import { Flex, Icon } from 'native-base';
import * as Device from 'expo-device';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import { Feather } from '@expo/vector-icons';
import WorkInProgress from '@/screens/Utils/WorkInProgress';
import BottomTabIcon from './BottomTab.Icon';
import BottomTabLabel from './BottomTab.Label';
import BottomTabButton from './BottomTab.Button';

const Tab = createBottomTabNavigator();

const getTabHeight = (): number => {
  const isiOS = Platform.OS === 'ios';
  const tabHeight = 65;
  const notchHeight = 100;

  if (isiOS) {
    return notchHeight;
  }
  return tabHeight;
};

function BottomTab() {
  const tabHeight = getTabHeight();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: (props) => BottomTabIcon({ ...props, screen: route.name }),
        // tabBarButton: (props) => BottomTabButton(props),
        tabBarLabel: (props) =>
          BottomTabLabel({ ...props, screen: route.name }),
        tabBarStyle: {
          paddingBottom: 4,
          paddingTop: 10,
          paddingHorizontal: 2,
          marginHorizontal: 0,
          position: 'absolute',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          display: 'flex',
          height: tabHeight,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIconStyle: {
          flex: 1,
        },
      })}
    >
      {/* <Tab.Screen name="Occurrences" component={Occurrences} /> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTab;
