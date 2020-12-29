import Head from 'next/head';
import { Page } from '@components/common/Page';
import { MainHeader } from '@components/MainHeader';
import { Section } from '@components/common/Section';
import { Gallery } from '@components/Gallery/';
import { FeaturedTiles } from '@components/FeaturedTiles';

const Home: React.FC = () => {
  return (
    <Page Header={MainHeader}>
      <Section bgImageUrl="/assets/images/abstract-bg-1.jpg">
        <Gallery className="pb-3 pb-md-4 pb-lg-5" />
        <FeaturedTiles />
      </Section>
    </Page>
  );
};

export default Home;
