import { ComponentType, FC } from 'react';
import Head from 'next/head';
import styles from './Page.module.scss';
import { Footer as DefaultFooter } from '@components/Footer';

interface IPageProps {
  Header?: ComponentType;
  Footer?: ComponentType;
  title?: string;
}

export const Page: FC<IPageProps> = ({ children, Header, Footer = DefaultFooter, title }) => {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Template{title && ` — ${title}`}</title>
      </Head>
      {Header && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
