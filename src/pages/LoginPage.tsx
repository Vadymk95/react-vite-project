import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Login } from '../components';
import { EnumRoutes } from '../router';

export const LoginPage: FC = () => {
  return (
    <Container name="Login">
      <Login />
      <p className="text-[18px]">
        Or you can{' '}
        <span className="redirect-link">
          <Link to={EnumRoutes.REGISTER_ROUTE}>Register</Link>
        </span>
      </p>
    </Container>
  );
};
