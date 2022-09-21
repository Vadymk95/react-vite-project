import { FC, useCallback } from 'react';
import { links } from '../../constants';
import { Link } from './Link';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeUser } from '../../store/slices/userSlice';

export const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  const activeStyle = {
    textDecoration: 'underline',
    fontWeight: 700,
    color: '#afafaf',
  };

  const sidebarLinks = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      isActive ? activeStyle : undefined,
    []
  );

  const handleLogOut = () => dispatch(removeUser());

  return (
    <div className="sidebar">
      {isAuth && (
        <>
          <header className="lg:flex flex-row-reverse justify-between items-center">
            <Button
              styles="text-[12px]"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
            <h2 className="text-[28px] font-bold">Menu</h2>
          </header>
          <nav className="sidebar__nav mt-4">
            <ul>
              {links.map((link) => (
                <Link key={link.name} {...link} sidebarLinks={sidebarLinks} />
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
