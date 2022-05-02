import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '@/components/BottomTab';
import AskModal from '@/screens/Modals/AskModal';
import OccurenceModal from '@/screens/Modals/OccurenceModal';
import RepassModal from '@/screens/Modals/RepassModal';

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name="AskModal"
        component={AskModal}
      />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name="OccurenceModal"
        component={OccurenceModal}
      />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name="RepassModal"
        component={RepassModal}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
