import { ComponentType, FC } from 'react';
import styles from './Page.module.scss';
import { Footer as DefaultFooter } from '@components/Footer';

interface IPageProps {
  Header?: ComponentType;
  Footer?: ComponentType;
}

export const Page: FC<IPageProps> = ({ children, Header, Footer = DefaultFooter }) => {
  return (
    <div className={styles.pageWrapper}>
      {Header && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
