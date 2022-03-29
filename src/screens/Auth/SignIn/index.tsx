import React from 'react';
import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/hooks/Auth/useAuth';
import { SignInParams } from '@/modules/security/domain/interfaces';

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
      _dark={{ bg: 'blueGray.800' }}
      _light={{ bg: 'primary.200' }}
    >
      <VStack space={2}>
        <FormControl isRequired isInvalid={'username' in errors}>
          <Stack mx="4">
            <FormControl.Label>Username</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  onBlur={onBlur}
                  placeholder="usuário"
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              )}
              name="username"
              rules={{ required: 'Field is required', minLength: 3 }}
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
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  onBlur={onBlur}
                  placeholder="senha"
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              )}
              name="password"
              rules={{ required: 'Field is required', minLength: 6 }}
              defaultValue=""
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
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
    </Center>
  );
}

export default SignIn;
