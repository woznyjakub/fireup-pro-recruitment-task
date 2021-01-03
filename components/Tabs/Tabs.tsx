import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@hooks/useWindowSize';
import { Breakpoint } from '@utils/Breakpoint';
import styles from './Tabs.module.scss';

const content = {
  tabs: [
    {
      label: 'BOX NAME 1',
      labelShort: '1',
      buttonColor: 'orange',
      tabContent: {
        title: 'Text from box name 1',
        paragraphs: [
          '111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare turpis nec mauris scelerisque, sed suscipit elit dapibus. Aliquam ut eros sed risus convallis venenatis eget vitae mi. Cras dictum est non nunc semper blandit. Quisque convallis tristique dolor eget ultrices. Mauris ac orci quis neque facilisis laoreet. Suspendisse vitae ultrices ipsum, at placerat eros. Proin varius malesuada ultricies. Cras a metus elementum, pellentesque libero eu, faucibus lorem. Integer ac ornare lacus. Ut pretium felis tellus, nec faucibus eros rhoncus eget. Pellentesque ultrices, ligula vestibulum porttitor pharetra, arcu nisl vulputate ligula, id vulputate ligula urna vel tortor. In ullamcorper blandit erat, nec egestas massa commodo consectetur. In nec odio lorem. Donec nulla neque, vehicula in bibendum et, rhoncus sit amet nibh.',
        ],
      },
    },
    {
      label: 'BOX NAME 2',
      labelShort: '2',
      buttonColor: 'red',
      tabContent: {
        title: 'Text from box name 2',
        paragraphs: [
          '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare turpis nec mauris scelerisque, sed suscipit elit dapibus. Aliquam ut eros sed risus convallis venenatis eget vitae mi. Cras dictum est non nunc semper blandit. Quisque convallis tristique dolor eget ultrices. Mauris ac orci quis neque facilisis laoreet. Suspendisse vitae ultrices ipsum, at placerat eros. Proin varius malesuada ultricies. Cras a metus elementum, pellentesque libero eu, faucibus lorem. Integer ac ornare lacus. Ut pretium felis tellus, nec faucibus eros rhoncus eget. Pellentesque ultrices, ligula vestibulum porttitor pharetra, arcu nisl vulputate ligula, id vulputate ligula urna vel tortor. In ullamcorper blandit erat, nec egestas massa commodo consectetur. In nec odio lorem. Donec nulla neque, vehicula in bibendum et, rhoncus sit amet nibh.',
        ],
      },
    },
    {
      label: 'BOX NAME 3',
      labelShort: '3',
      buttonColor: 'yellow',
      tabContent: {
        title: 'Text from box name 3',
        paragraphs: [
          '333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare turpis nec mauris scelerisque, sed suscipit elit dapibus. Aliquam ut eros sed risus convallis venenatis eget vitae mi. Cras dictum est non nunc semper blandit. Quisque convallis tristique dolor eget ultrices. Mauris ac orci quis neque facilisis laoreet. Suspendisse vitae ultrices ipsum, at placerat eros. Proin varius malesuada ultricies. Cras a metus elementum, pellentesque libero eu, faucibus lorem. Integer ac ornare lacus. Ut pretium felis tellus, nec faucibus eros rhoncus eget. Pellentesque ultrices, ligula vestibulum porttitor pharetra, arcu nisl vulputate ligula, id vulputate ligula urna vel tortor. In ullamcorper blandit erat, nec egestas massa commodo consectetur. In nec odio lorem. Donec nulla neque, vehicula in bibendum et, rhoncus sit amet nibh.',
        ],
      },
    },
    {
      label: 'BOX NAME 4',
      labelShort: '4',
      buttonColor: 'green',
      tabContent: {
        title: 'Text from box name 4',
        paragraphs: [
          '444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare turpis nec mauris scelerisque, sed suscipit elit dapibus. Aliquam ut eros sed risus convallis venenatis eget vitae mi. Cras dictum est non nunc semper blandit. Quisque convallis tristique dolor eget ultrices. Mauris ac orci quis neque facilisis laoreet. Suspendisse vitae ultrices ipsum, at placerat eros. Proin varius malesuada ultricies. Cras a metus elementum, pellentesque libero eu, faucibus lorem. Integer ac ornare lacus. Ut pretium felis tellus, nec faucibus eros rhoncus eget. Pellentesque ultrices, ligula vestibulum porttitor pharetra, arcu nisl vulputate ligula, id vulputate ligula urna vel tortor. In ullamcorper blandit erat, nec egestas massa commodo consectetur. In nec odio lorem. Donec nulla neque, vehicula in bibendum et, rhoncus sit amet nibh.',
        ],
      },
    },
  ],
};

export const Tabs: FC = () => {
  const { width: windowWidth } = useWindowSize(true);

  return (
    <div className={styles.mainWrapper}>
      {/* tab content */}
      {content.tabs.length && (
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderPostionWrapper}>
            <Swiper className={styles.slider}>
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
      {content.tabs.length && (
        <>
          {content.tabs.map(({ label, labelShort, buttonColor }, i, array) => {
            const ssrValue = label;
            const isFirst = i === 0;

            // calculate if a button should be placed over the tabs content
            const isOver = i < array.length / 2 && windowWidth >= Breakpoint.md;

            return (
              <button
                key={labelShort}
                className={[styles.button, `bg-${buttonColor}`, isFirst ? styles.active : '', isOver ? styles.over : ''].join(
                  ' ',
                )}
              >
                {windowWidth ? (windowWidth >= Breakpoint.md ? label : labelShort) : ssrValue}
              </button>
            );
          })}
        </>
      )}
    </div>
  );
};
