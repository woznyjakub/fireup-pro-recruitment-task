import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Breakpoint } from '@utils/Breakpoint';

const content = {
  tabs: [
    {
      label: 'BOX NAME 1',
      labelShort: '1',
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
  const isWindowDefined = typeof window !== 'undefined';

  return (
    <div>
      {/* tab content */}
      {content.tabs.length && (
        <Swiper>
          {content.tabs.map(({ tabContent: { title, paragraphs } }) => {
            return (
              <SwiperSlide key={title}>
                <div>
                  <h3>{title}</h3>
                  <div>
                    {paragraphs.map((text) => (
                      <p>{text}</p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {/* tab buttons */}
      {content.tabs.length && (
        <div>
          {content.tabs.map(({ label, labelShort, tabContent }) => {
            return (
              <button key={labelShort}>{(isWindowDefined && window.innerWidth) >= Breakpoint.lg ? label : labelShort}</button>
            );
          })}
        </div>
      )}
    </div>
  );
};
