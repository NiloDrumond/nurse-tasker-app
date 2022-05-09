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
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = React.useCallback(
    (date?: Date) => {
      onChange(date);
      setIsOpen(false);
    },
    [onChange],
  );

  return isOpen ? (
    <DateTimePicker
      value={value || new Date()}
      mode="time"
      onChange={(_e: any, date?: Date) => {
        setIsOpen(Platform.OS === 'ios');
        handleChange(date);
      }}
    />
  ) : (
    <Button onPress={() => setIsOpen(true)}>
      {value ? moment(value).format('HH:mm') : 'Selecione um horário'}
    </Button>
  );
}

export default DatePicker;
