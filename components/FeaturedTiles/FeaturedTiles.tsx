import styles from './FeaturedTiles.module.scss';
import { Picture } from '@utils/Picture';
import { breakpoints } from '@utils/breakpoints';
import { PictureElement } from '@entities/picture';

const content = {
  photoTiles: [
    {
      imageUrls: {
        phone: '/assets/images/eiffel-tower-phone.jpg',
        tablet: '/assets/images/eiffel-tower-tablet.jpg',
        desktop: '/assets/images/eiffel-tower-desktop.jpg',
      },
      altText: 'Eiffel Tower',
    },
    {
      imageUrls: {
        phone: '/assets/images/statue-of-liberty-phone.jpg',
        tablet: '/assets/images/statue-of-liberty-tablet.jpg',
        desktop: '/assets/images/statue-of-liberty-desktop.jpg',
      },
      altText: 'Statue of Liberty',
    },
  ],
  textTiles: [
    {
      title: 'Title',
      titleIconUrl: '/assets/images/edit.png',
      listContent: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.',
        },
      ],
    },
  ],
};

export const FeaturedTiles: React.FC = () => {
  const { photoTiles, textTiles } = content;
  return (
    <div className="row">
      {photoTiles &&
        photoTiles.map(({ imageUrls, altText }, i) => {
          const images: PictureElement[] = [
            {
              breakpoint: breakpoints.xs,
              url: imageUrls.phone,
            },
            {
              breakpoint: breakpoints.md,
              url: imageUrls.tablet,
            },
            {
              breakpoint: breakpoints.lg,
              url: imageUrls.desktop,
              altText,
            },
          ];
          const isEven = (i + 1) % 2 === 0;

          return (
            <div className="col-md-12 col-lg-7 mb-2 mb-md-4 mb-lg-0" key={imageUrls.desktop}>
              <figure className={[styles.imageWrapper, isEven ? styles.even : styles.odd].join(' ')}>
                <Picture images={images} className={[styles.image, 'img-stretched'].join(' ')} />
                <div className={[styles.arrow, isEven ? styles.even : styles.odd].join(' ')}>
                  <span>{isEven ? '«' : '»'}</span>
                </div>
              </figure>
            </div>
          );
        })}

      {textTiles &&
        textTiles.map(({ titleIconUrl, title, listContent }) => {
          return (
            <div className="col-lg-10 d-flex pt-2 pt-md-0" key={title}>
              <div className="bg-white">
                <div className={styles.titleWrapper}>
                  <h3 className={styles.title}>
                    <img src={titleIconUrl} alt={title} className={styles.icon} />
                    {title}
                  </h3>
                </div>
                {listContent && (
                  <div className={styles.contentWrapper}>
                    <ul className={styles.list}>
                      {listContent.map(({ text }, i) => {
                        return (
                          <li className={styles.listItem} key={i}>
                            <div className={styles.listItemContent}>
                              <p>{text}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};
