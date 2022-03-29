import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/Auth/SignIn';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;