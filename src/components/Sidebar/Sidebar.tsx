import { FC, useCallback } from 'react';
import { links } from '../../constants';
import { Link } from './Link';
import { useAuth } from '../../hooks/useAuth';

export const Sidebar: FC = () => {
  const { isAuth } = useAuth();

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

  return (
    <div className="sidebar">
      {isAuth && (
        <>
          <h2 className="text-[28px] font-bold">Menu</h2>
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
