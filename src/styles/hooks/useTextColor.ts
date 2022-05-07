import { useColorModeValue } from 'native-base';

const useTextColor = (): string => useColorModeValue('white', 'black');

export default useTextColor;
