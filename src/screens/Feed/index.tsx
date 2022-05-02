import React from 'react';
import { Center, Text } from 'native-base';
import { Pressable } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
 
function Feed({ navigation }: StackScreenProps<AppStackParamList, 'Feed'>) {
  const bg = useBackgroundColor();
  const onPressTest = React.useCallback(() => {
    navigation.navigate('AskModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Tem certeza que deseja tomar essa ação?',
      title: 'Atenção!',
    });
  }, [navigation]);

  return (
    <Center
      flex={1}
      _dark={{ bg: 'coolGray.700' }}
      _light={{ bg: 'primary.200' }}
    >
      <Text>Ocorrencias</Text>
      <Pressable onPress={onPressTest}>
        <Text>ASDASD</Text>
      </Pressable>
    </Center>
  );
}

export default Feed;
