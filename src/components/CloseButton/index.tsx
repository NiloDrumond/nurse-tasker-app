import React from 'react';
import { IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import navigation from '@/services/navigation';

function CloseButton() {
  const handlePress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <IconButton
      position="absolute"
      right={0}
      p={0}
      top={0}
      onPress={handlePress}
      icon={<Icon size="6" as={Feather} name="x" />}
    />
  );
}

export default CloseButton;
