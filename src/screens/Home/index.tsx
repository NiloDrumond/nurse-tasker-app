import React from 'react';
import {
  Button,
  Center,
  HStack,
  Icon,
  Input,
  Text,
  View,
  VStack,
} from 'native-base';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';

function Home() {
  const [showBox, setShowBox] = React.useState(false);
  const bg = useBackgroundColor();

  return (
    <Center flex={1} bg={bg}>
      <VStack space={18}>
        <HStack
          justifyItems="space-evenly"
          alignItems="center"
          space={2}
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
        >
          <Ionicons name="person" size={60} color="black" />

          <VStack justifyItems="space-evenly">
            <Text color="black" fontSize="24px">
              Renata dos Santos
            </Text>
            <Text color="black" fontSize="18px">
              CPF: 110.231.235-87
            </Text>
          </VStack>
        </HStack>

        <VStack
          justifyItems="space-evenly"
          alignItems="center"
          space="18px"
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
        >
          <Input
            w="100%"
            placeholder="Pesquisar"
            size="lg"
            variant="filled"
            color="black"
            bg="background.box"
            paddingX="16px"
            marginBottom="8px"
            borderRadius="12px"
            InputRightElement={
              <Icon
                as={<Entypo name="magnifying-glass" size={24} color="black" />}
              />
            }
          />
          <TouchableHighlight onPress={() => setShowBox(!showBox)}>
            <VStack
              justifyItems="space-evenly"
              alignItems="center"
              space="28px"
              bg="background.box"
              padding="16px 24px"
              borderRadius="12px"
            >
              <HStack justifyItems="space-evenly" alignItems="center" space={4}>
                <Text color="black" fontSize="36px">
                  14:30
                </Text>
                <VStack>
                  <Text color="black" fontSize="14px">
                    Médico: Roberto Silva
                  </Text>
                  <Text color="black" fontSize="14px">
                    Medicamento: Dipirona
                  </Text>
                  <Text color="black" fontSize="14px">
                    Paciente: Ricardo Teixeira
                  </Text>
                </VStack>
              </HStack>

              {showBox && (
                <VStack>
                  <HStack space="10px" alignItems="center">
                    <Text color="black" fontSize="16px">
                      14:00
                    </Text>
                    <View
                      width="12px"
                      height="12px"
                      borderRadius="50%"
                      backgroundColor="#749B97"
                    />
                    <VStack flex={1}>
                      <Text color="black" fontSize="10px" fontWeight="bold">
                        Medicamento Prescrito
                      </Text>
                      <Text color="black" fontSize="10px">
                        Médico: Fábio da Silva
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              )}

              {showBox && (
                <VStack space="10px">
                  <Button
                    background="green.button"
                    color="black"
                    borderRadius="36px"
                  >
                    <Text color="black" marginX="16px" marginY="-2px">
                      Concluir Atividade
                    </Text>
                  </Button>
                  <Button
                    background="red.button"
                    color="black"
                    borderRadius="36px"
                  >
                    <Text color="black" marginX="16px" marginY="-2px">
                      Registrar Ocorrência
                    </Text>
                  </Button>
                  <Button background="white" color="black" borderRadius="36px">
                    <Text color="black" marginX="16px" marginY="-2px">
                      Repassar Atividade
                    </Text>
                  </Button>
                </VStack>
              )}
            </VStack>
          </TouchableHighlight>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
