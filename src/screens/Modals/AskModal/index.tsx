import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import { Flex, Text, Center, View, useColorModeValue } from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import useBackgroundColor from '@/utils/styles/useBackgroundColor';

function AskModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'AskModal'>) {
  const { colors } = useTheme();
  const bg = useBackgroundColor();
  const { callback, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const handlePress = React.useCallback(() => {
    callback();
    navigation.goBack();
  }, [callback, navigation]);

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
          { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          width: '60%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: bg,
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
        <Flex bg={bg} p={4}>
          <Text>{title}</Text>
          <Pressable onPress={handlePress}>
            <Text>clica</Text>
          </Pressable>
        </Flex>
      </Animated.View>
    </View>
  );
}

export default AskModal;
