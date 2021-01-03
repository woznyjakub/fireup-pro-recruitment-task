import { FC, useState, MouseEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useWindowSize } from '@hooks/useWindowSize';
import { Breakpoint } from '@utils/Breakpoint';
import styles from './Tabs.module.scss';

interface TabsProps {
  content: {
    tabs: Array<{
      label: string;
      labelShort: string;
      buttonColor: string;
      tabContent: {
        title: string;
        paragraphs: string[];
      };
    }>;
  };
}

export const Tabs: FC<TabsProps> = ({ content }) => {
  const { width: windowWidth } = useWindowSize(true);
  const [activeSlideIndex, setActiveSliceIndex] = useState<number>(0);
  const [tabContentSlider, setTabContentSlider] = useState<SwiperType>(undefined);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, index) => {
    tabContentSlider.slideTo(index);
    setActiveSliceIndex(index);
  };

  return (
    <div className={styles.mainWrapper}>
      {/* tab content */}
      {content.tabs.length && (
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderPostionWrapper}>
            <Swiper className={styles.slider} onInit={(swiper: SwiperType) => setTabContentSlider(swiper)} allowTouchMove={false}>
              {content.tabs.map(({ tabContent: { title, paragraphs } }) => {
                return (
                  <SwiperSlide key={title} className={styles.sliderItem}>
                    <div>
                      <h3 className="basic-heading color-blue pb-1">{title}</h3>
                      <div className="basic-text">
                        {paragraphs.map((text) => (
                          <p key={text}>{text}</p>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}

      {/* tab buttons */}
      {content.tabs.length &&
        content.tabs.map(({ label, labelShort, buttonColor }, i, array) => {
          const ssrValue = label;
          const isActive = i === activeSlideIndex;

          // calculate if a button should be placed over the tabs content
          const isOver = i < array.length / 2 && windowWidth >= Breakpoint.md;

          return (
            <button
              key={labelShort}
              onClick={(e) => handleClick(e, i)}
              className={[styles.button, `bg-${buttonColor}`, isActive ? styles.active : '', isOver ? styles.over : ''].join(' ')}
            >
              {windowWidth ? (windowWidth >= Breakpoint.md ? label : labelShort) : ssrValue}
            </button>
          );
        })}
    </div>
  );
};
