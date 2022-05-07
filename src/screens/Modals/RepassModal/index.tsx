/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import {
  Flex,
  Text,
  Center,
  View,
  useColorModeValue,
  VStack,
  Button,
  HStack,
  Select,
  CheckIcon,
  TextArea,
  FlatList,
  Spacer,
  Box,
  CloseIcon
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';


const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Jorge Silva"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
  fullName: "Ana Cláudia Ribeiro"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
  fullName: "Priscilla Lemos"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
  fullName: "Lucas Drummond"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
  fullName: "Pedro Henrique de Castro"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Jorge Silva"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
  fullName: "Ana Cláudia Ribeiro"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
  fullName: "Priscilla Lemos"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
  fullName: "Lucas Drummond"
}, {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
  fullName: "Pedro Henrique de Castro"
}]

function RepassModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'RepassModal'>) {
  const bg = useBackgroundColor();
  const { onCancel, onConfirm, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const handleChoice = React.useCallback((choice: string) => {
    navigation.navigate('AskModal', {
      onConfirm: () => {
        console.log('ok');
        navigation.goBack();
      },
      subtitle: `Você deseja repassar sua atividade para ${choice}?`,
      title: 'Atenção!',
    });
  }, [onConfirm, navigation]);

  const handleCancel = React.useCallback(() => {
    if (onCancel) onCancel();
    navigation.goBack();
  }, [onCancel, navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          width: '70%',
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <VStack borderRadius="lg" alignItems="center" bg={bg} p={4} space={3} w="100%" maxH="500px">
          <HStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="xl">
              {title}
            </Text>
            <Button colorScheme='transparent' alignSelf="right" p={0} ml="auto" onPress={handleCancel}>
              <CloseIcon />
            </Button>
          </HStack>
          
          <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item}) => 
            <Box borderBottomWidth={1} borderColor="coolGray.200">
              <Button 
                onPress={() => {handleChoice(item.fullName)}}
                colorScheme="transparent" 
                _hover={{
                  bg: '#00000070'
                }}>
              <Text fontSize="md">{item.fullName}</Text>
            </Button>
            </Box>
          }
            w="100%"
           />
        </VStack>
      </Animated.View>
    </View>
  );
}

export default RepassModal;
