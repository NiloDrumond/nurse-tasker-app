import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, useDisclose } from 'native-base';
import { Platform } from 'react-native';
import moment from 'moment';

type DatePickerProps = {
  // eslint-disable-next-line react/require-default-props
  value?: Date;
  onChange: (date?: Date) => void;
};

function DatePicker({ onChange, value }: DatePickerProps) {
  const { isOpen, onClose, onOpen } = useDisclose();

  const handleChange = React.useCallback(
    (date?: Date) => {
      onChange(date);
      if (Platform.OS === 'android') {
        onClose();
      }
    },
    [onChange, onClose],
  );

  return isOpen ? (
    <DateTimePicker
      value={value || new Date()}
      mode="time"
      onChange={(_e: any, date?: Date) => handleChange(date)}
    />
  ) : (
    <Button onPress={onOpen}>
      {value ? moment(value).format('HH:mm') : 'Selecione um horário'}
    </Button>
  );
}

export default DatePicker;
