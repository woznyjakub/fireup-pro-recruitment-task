import { Swiper, SwiperSlide } from 'swiper/react';
import { Section } from '@components/common/Section';

import { FC, useState, useCallback } from 'react';
import styles from './MainHeader.module.scss';

const content = {
  sliderData: {
    slides: [
      {
        title: 'Feel the Power of\xA0Typography',
        imageUrl: '/assets/images/header-bg-1.jpg',
        textColor: 'white',
      },
      {
        title: 'Feel the Power of\xA0RWD',
        imageUrl: '/assets/images/header-bg-2.jpg',
      },
      {
        title: 'Feel the Power of\xA0UX\xA0Design',
        imageUrl: '/assets/images/header-bg-3.jpg',
      },
    ],
    iconTiles: [
      {
        label: 'Typography',
        iconUrl: '/assets/images/icons/letter.jpg',
        bgColor: 'red',
      },
      {
        label: 'Responsive Web Design',
        iconUrl: '/assets/images/icons/magic.jpg',
        bgColor: 'blue',
      },
      {
        label: 'UX Design',
        iconUrl: '/assets/images/icons/ux.jpg',
        bgColor: 'green',
      },
    ],
  },
};

export const MainHeader: FC = () => {
  const {
    sliderData: { slides, iconTiles },
  } = content;

  const [activeSlideId, setAcitveSlideId] = useState<number>(0);

  const handleSlideChange = useCallback(
    ({ activeIndex }) => {
      setAcitveSlideId(activeIndex);
    },
    [activeSlideId],
  );

  return (
    <header>
      {slides.length && (
        <Swiper slidesPerView={1} onSlideChange={handleSlideChange} className={styles.slider}>
          {slides.map(({ title, imageUrl, textColor }, i) => {
            const isFirst = i === 0;
            const Heading = isFirst ? 'h1' : 'h2';

            return (
              <SwiperSlide key={title}>
                <Section tagName="div" bgImageUrl={imageUrl}>
                  <div className={styles.wrapper}>
                    <Heading className={[styles.heading, textColor ? `color-${textColor}` : ''].join(' ')}>{title}</Heading>
                  </div>
                </Section>
              </SwiperSlide>
            );
          })}
          {iconTiles.length && (
            <ul className={[styles.iconTilesWrapper, 'container', 'list-unstyled', 'pb-3', 'pb-md-4', 'pb-lg-5'].join(' ')}>
              {iconTiles.map(({ label, iconUrl, bgColor }, i) => {
                const isActive = i === activeSlideId;

                return (
                  <li key={label} className={[styles.iconTile, isActive ? styles.iconTileActive : ''].join(' ')}>
                    <figure className={styles.iconTileInternalWrapper}>
                      <div className={styles.iconTileImageWrapper}>
                        <img src={iconUrl} alt={label} />
                      </div>
                      <span className={[styles.iconTileText, `bg-${bgColor}`].join(' ')}>{label}</span>
                    </figure>
                  </li>
                );
              })}
            </ul>
          )}
        </Swiper>
      )}
    </header>
  );
};

export default MainHeader;
