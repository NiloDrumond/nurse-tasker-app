import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '@/components/BottomTab';
import AskModal from '@/screens/Modals/AskModal';
import OccurenceModal from '@/screens/Modals/OccurenceModal';
import RepassModal from '@/screens/Modals/RepassModal';
import OcurrencesListModal from '@/screens/Modals/OcurrencesListModal';
import { UserProvider } from '@/hooks/User/User.provider';
import PrescriptionModal from '@/screens/Modals/PrescriptionModal';

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <UserProvider>
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
          name="OcurrencesListModal"
          component={OcurrencesListModal}
        />
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
        <Stack.Screen
          options={{
            presentation: 'transparentModal',
          }}
          name="PrescriptionModal"
          component={PrescriptionModal}
        />
      </Stack.Navigator>
    </UserProvider>
  );
}

export default AppRoutes;
