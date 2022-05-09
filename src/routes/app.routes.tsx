import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '@/components/BottomTab';
import AskModal from '@/screens/Modals/AskModal';
import OccurrenceModal from '@/screens/Modals/OccurrenceModal';
import RepassModal from '@/screens/Modals/RepassModal';
import PrescriptionModal from '@/screens/Modals/PrescriptionModal';
import OccurrencesListModal from '@/screens/Modals/OccurrencesListModal';
import { useData } from '@/hooks/Data/useAuth';
import LoadingScreen from '@/screens/Loading';
import OccurrenceShowModal from '@/screens/Modals/OccurrenceShowModal';

const Stack = createStackNavigator();

function AppRoutes() {
  const { isLoading } = useData();

  if (isLoading) return <LoadingScreen />;
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
        name="OccurrencesListModal"
        component={OccurrencesListModal}
      />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name="OccurrenceShowModal"
        component={OccurrenceShowModal}
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
        name="OccurrenceModal"
        component={OccurrenceModal}
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
  );
}

export default AppRoutes;
