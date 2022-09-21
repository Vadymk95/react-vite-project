import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, SignUp } from '../components';
import { EnumRoutes } from '../router';

export const RegisterPage: FC = () => {
  return (
    <Container name="Register">
      <SignUp />
      <p className="text-[18px]">
        Already have an account?{' '}
        <span className="redirect-link">
          <Link to={EnumRoutes.LOGIN_ROUTE}>Sign in</Link>
        </span>
      </p>
    </Container>
  );
};
