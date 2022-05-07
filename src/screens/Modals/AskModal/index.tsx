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
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';

function AskModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'AskModal'>) {
  const bg = useBackgroundColor();
  const { onCancel, onConfirm, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const handleConfirm = React.useCallback(() => {
    onConfirm();
    navigation.goBack();
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
          width: '60%',
          maxWidth: 400,
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
        <VStack borderRadius="lg" alignItems="center" bg={bg} p={4}>
          <Text fontWeight={600} mb={2} fontSize="xl">
            {title}
          </Text>
          {subtitle && <Text mb={4}>{subtitle}</Text>}
          <HStack space="4">
            <Button onPress={handleCancel} colorScheme="red">
              Não
            </Button>
            <Button onPress={handleConfirm} colorScheme="green">
              Sim
            </Button>
          </HStack>
        </VStack>
      </Animated.View>
    </View>
  );
}

export default AskModal;
