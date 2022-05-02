import { useColorModeValue } from 'native-base';

const useBackgroundColor = (): string =>
  useColorModeValue('primary.200', 'coolGray.700');

export default useBackgroundColor;
