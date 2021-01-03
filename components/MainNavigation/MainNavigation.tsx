import { FC, useCallback, useState } from 'react';
import Hamburger from './Hamburger';
import styles from './MainNavigation.module.scss';

export interface MainNavigationProps {
  logo?: {
    url: string;
    name: string;
  };
  menuItems: Array<{
    label: string;
    link: string;
    color: string;
    isActive?: boolean;
  }>;
}

export const MainNavigation: FC<MainNavigationProps> = ({ logo, menuItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleHamburgerClick = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <section className={styles.mainWrapper}>
      <div className="container">
        <div className={styles.wrapper}>
          {logo && (
            <figure className={styles.logoWrapper}>
              <a href="/">
                <img src={logo.url} alt={`${logo.name} logo`} className={styles.logo} />
              </a>
            </figure>
          )}
          <div className={styles.hamburgerWrapper}>
            <Hamburger isActive={isMenuOpen} onClick={handleHamburgerClick} />
          </div>

          {menuItems.length && (
            <nav className={[styles.menuWrapper, isMenuOpen ? styles.active : ''].join(' ')}>
              <ul className={styles.menu}>
                {menuItems.map(({ label, link: url, color, isActive }) => {
                  return (
                    <li className={[styles.menuItem, `bg-${color}`, isActive ? styles.active : ''].join(' ')}>
                      <a href={url} className={styles.menuLink}>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};
