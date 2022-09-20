import { ChangeEvent, useState } from 'react';

type ReturnType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (initialValue: string): ReturnType => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return {
    value,
    onChange: handleChange,
  };
};
