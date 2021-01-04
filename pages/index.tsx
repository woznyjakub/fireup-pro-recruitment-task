import { Page } from '@components/common/Page';
import { MainHeader } from '@components/MainHeader';
import { Tabs } from '@components/Tabs';
import { Section } from '@components/common/Section';
import { Gallery } from '@components/Gallery/';
import { FeaturedTiles } from '@components/FeaturedTiles';
import { MainNavigation } from '@components/MainNavigation';
import content from '@data/index.json';

const menuItems = [
  {
    label: 'Home',
    link: '/',
    color: 'yellow',
    isActive: true,
  },
  {
    label: 'Menu 2',
    link: '/menu-3',
    color: 'red',
  },
  {
    label: 'Menu 3',
    link: '/menu-3',
    color: 'green',
  },
  {
    label: 'Pogoda',
    link: '/pogoda',
    color: 'paleblue',
  },
];

const Home: React.FC = () => {
  return (
    <Page Header={MainHeader} title="Main page">
      <MainNavigation logo={{ url: '/assets/images/logo.jpg', name: 'fireup.pro' }} menuItems={menuItems} />
      <Section className="bg-grey-2">
        <Tabs content={content.tabs} />
      </Section>
      <Section bgImageUrl="/assets/images/abstract-bg-1.jpg">
        <Gallery className="pb-3 pb-md-4 pb-lg-5" content={content.gallery} />
        <FeaturedTiles content={content.featuredTiles} />
      </Section>
    </Page>
  );
};

export default Home;
