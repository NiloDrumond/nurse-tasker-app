import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectUser from '../screens/Auth/SelectUser';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="SignIn" component={SelectUser} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
