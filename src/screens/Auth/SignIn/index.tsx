import React from 'react';
import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  VStack,
  WarningOutlineIcon,
  Image,
  Heading,
  Box,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/hooks/Auth/useAuth';
import { SignInParams } from '@/modules/security/domain/interfaces';
import ToggleDarkMode from '@/components/ToggleDarkMode';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const LogoImage = require('@/../assets/Logo.png');

function SignIn() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInParams>();

  const onSubmit = React.useCallback(
    (data: SignInParams) => {
      signIn(data);
    },
    [signIn],
  );

  return (
    <Center
      flex={1}
      _dark={{
        bg: 'coolGray.700',
      }}
      _light={{
        bg: {
          linearGradient: {
            colors: ['lightBlue.300', 'green.300'],
            start: [0, 0],
            end: [1, 1],
          },
        },
      }}
    >
      <VStack space={2}>
        <Center
          // bg={{
          //   linearGradient: {
          //     colors: ['lightBlue.300', 'green.500'],
          //     start: [0, 0],
          //     end: [1, 0],
          //   },
          // }}
          rounded="xl"
          mb={2}
        >
          <Image
            source={LogoImage}
            height="140px"
            width="80%"
            resizeMode="contain"
            alt="NurseTasker"
          />
        </Center>
        <Center>
          <Heading>Faça login</Heading>
        </Center>
        <FormControl isRequired isInvalid={'username' in errors}>
          <Stack mx="4">
            {/* <FormControl.Label>Username</FormControl.Label> */}
            <Controller
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  onBlur={onBlur}
                  placeholder="usuário"
                  onChangeText={(val) => onChange(val)}
                  value={value}
                  size="lg"
                  variant="filled"
                />
              )}
              name="username"
              rules={{ required: 'Campo obrigatório', minLength: 3 }}
              defaultValue=""
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.password?.message}
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl isRequired isInvalid={'password' in errors}>
          <Stack mx="4">
            {/* <FormControl.Label>Password</FormControl.Label> */}
            <Controller
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  onBlur={onBlur}
                  placeholder="senha"
                  onChangeText={(val) => onChange(val)}
                  value={value}
                  size="lg"
                  variant="filled"
                />
              )}
              name="password"
              rules={{ required: 'Campo obrigatório', minLength: 6 }}
              defaultValue=""
            />
            <FormControl.HelperText>
              No mínimo 6 caractéres
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.password?.message}
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Button mt={4} colorScheme="green" onPress={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </VStack>
      <Box position="absolute" top="8" right="8">
        <ToggleDarkMode />
      </Box>
    </Center>
  );
}

export default SignIn;
