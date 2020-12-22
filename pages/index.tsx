import Head from 'next/head';
import { Page } from '@components/common/Page';
import { MainHeader } from '@components/MainHeader';
import { Section } from '@components/common/Section';

const Home: React.FC = () => {
  return (
    <Page Header={MainHeader}>
      <Section></Section>
    </Page>
  );
};

export default Home;
