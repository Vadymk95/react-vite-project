import { ChangeEvent, useState } from 'react';

type InputType = string | number;

export const useInput = (initialValue: InputType) => {
  const [value, setValue] = useState<InputType>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return {
    value,
    onChange: handleChange,
  };
};
