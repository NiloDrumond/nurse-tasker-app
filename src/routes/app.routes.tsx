import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '@/components/BottomTab';
import AskModal from '@/screens/Modals/AskModal';

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
      <Stack.Group>
        <Stack.Screen
          options={{
            presentation: 'transparentModal',
            // cardStyle: { backgroundColor: 'transparent', opacity: 0.9 },
            // headerShown: false,
            // cardOverlayEnabled: true,
          }}
          name="AskModal"
          component={AskModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AppRoutes;
