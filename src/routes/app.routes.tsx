import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../screens/Test';

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardShadowEnabled: false,
        cardOverlayEnabled: true,
      }}
    >
      <Stack.Screen name="test" component={Test} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
