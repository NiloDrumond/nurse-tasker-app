import React from 'react';
import { Center, Text } from 'native-base';
import { Pressable } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';

function Feed({ navigation }: StackScreenProps<AppStackParamList, 'Feed'>) {
  const onPressTest = React.useCallback(() => {
    navigation.navigate('AskModal', {
      callback: () => {
        console.log('ok');
      },
      subtitle: 'se,',
      title: 'titulo',
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
