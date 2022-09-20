import { FC, useState } from 'react';
import { Input, Button } from './ui';
import { useInput } from '../hooks/useInput';
import { styles } from '../styles';

const REGISTER_PAGE = 'Sign Up';

type FormProps = {
  title: string;
  isExistUser?: boolean;
  handleClick: (email: {value: string, reset: () => void}, password: {value: string, reset: () => void}) => void;
};

export const Form: FC<FormProps> = ({ title = 'Button', handleClick, isExistUser }) => {
  const currentPage = title === REGISTER_PAGE;
  const email = useInput('');
  const password = useInput('');
  const repeatPassword = useInput('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true);
  const [isValidRepeatdPassword, setValidRepeatPassword] = useState(true);
  console.log(isExistUser)
  const onClick = () => {
    if (email.value.includes('@gmail.com') && password.value.length > 7) {
      if (currentPage && password.value === repeatPassword.value) handleClick(email, password);
      if (!currentPage) handleClick(email, password);
      repeatPassword.reset();
    } else {
      handleBlurEmail();
      handleBlurPassword();
    }
  };

  const handleBlurEmail = () =>
    !email.value.includes('@gmail.com')
      ? setValidEmail(false)
      : setValidEmail(true);
  const handleBlurPassword = () =>
    password.value.length < 8
      ? setValidPassword(false)
      : setValidPassword(true);
  const handleBlurRepeatPassword = () =>
    password.value !== repeatPassword.value
      ? setValidRepeatPassword(false)
      : setValidRepeatPassword(true);

  return (
    <div className="flex flex-col items-start">
      <label className="w-1/2 mb-4">
        <span className="text-[14px] pl-4">Login:</span>
        <Input
          onBlur={handleBlurEmail}
          valid={isValidEmail}
          {...email}
          type="email"
          placeholder="Email"
        />
      </label>
      <label className="w-1/2">
        <span className="text-[14px] pl-4">Password:</span>
        <Input
          onBlur={handleBlurPassword}
          valid={isValidPassword}
          {...password}
          type="password"
          placeholder="Password"
        />
      </label>
      {title === REGISTER_PAGE && (
        <label className="w-1/2 mt-4">
          <span className="text-[14px] pl-4">Repeat Password:</span>
          <Input
            onBlur={handleBlurRepeatPassword}
            valid={isValidRepeatdPassword}
            {...repeatPassword}
            type="password"
            placeholder="Repeat Password"
          />
        </label>
      )}
      <div className={`${styles.marginY} relative`}>
        <Button onClick={onClick}>{title}</Button>
        {isExistUser && currentPage && <p className="text-danger absolute w-[200px]">This user already existed!</p>}
      </div>
    </div>
  );
};
