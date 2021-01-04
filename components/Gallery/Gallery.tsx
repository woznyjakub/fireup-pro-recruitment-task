import { FC, useState, MouseEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Breakpoint } from '@utils/Breakpoint';
import { Popup } from '@components/Popup';
import { Picture } from '@utils/Picture';
import { IPictureElement } from '@entities/picture';
import styles from './Gallery.module.scss';

interface IGalleryProps {
  className?: string;
  content: {
    items: Array<{
      id: number;
      type: string;
      color: string;
      label?: string;
      imageUrls: {
        phone: string;
        tablet: string;
        desktop: string;
        original: string;
      };
    }>;
  };
}

export const Gallery: FC<IGalleryProps> = ({ className, content }) => {
  const { items } = content;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [slider, setSlider] = useState<SwiperType>(undefined);

  const handleOpenPopup = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    setIsModalOpen(true);
    alert('Unfortunately, this feature is not ready.');
    // slider.slideTo(index);
  };
  const handleClosePopup = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      {items.length && (
        <ul className={[styles.list, 'list-unstyled'].join(' ')}>
          {items.map(({ id, type, color, imageUrls, label }, i) => {
            const itemColor = color && `color-${color}`;

            const imagesData: IPictureElement[] = [
              {
                breakpoint: Breakpoint.xs,
                url: imageUrls.phone,
              },
              {
                breakpoint: Breakpoint.md,
                url: imageUrls.tablet,
              },
              {
                breakpoint: Breakpoint.lg,
                url: imageUrls.desktop,
                altText: label || `${type || ''} tile`,
              },
            ];

            return (
              <li key={id} className={[styles.listItem, itemColor].join(' ')}>
                <figure className={styles.itemInternalWrapper}>
                  <button onClick={(e) => handleOpenPopup(e, i)} className={[styles.imageWrapper, styles[type]].join(' ')}>
                    <Picture images={imagesData} className="img-stretched" />
                  </button>
                  {label && (
                    <figcaption className={styles.labelWrapper}>
                      <span className={styles.label}>
                        <span className={styles.labelColorWrapper}>{label}</span>
                      </span>
                    </figcaption>
                  )}
                </figure>
              </li>
            );
          })}
        </ul>
      )}
      <Popup isActive={isModalOpen} closePopupCallback={handleClosePopup}>
        {items.length && (
          <Swiper slidesPerView={1} onInit={(swiper: SwiperType) => setSlider(swiper)}>
            {items.map(({ id, imageUrls, label }) => {
              return (
                <SwiperSlide key={id}>
                  <figure className={styles.slideImageWrapper}>
                    <img src={imageUrls.original} alt={label} className={[styles.slideImage, 'img-stretched'].join(' ')} />
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </Popup>
    </div>
  );
};
