import styles from './Gallery.module.scss';
import { breakpoints } from '@utils/breakpoints';
import { Picture } from '@utils/Picture';
import { PictureElement } from '@entities/picture';

const content = {
  items: [
    {
      id: 0,
      type: 'angular',
      color: 'lightblue',
      imageUrls: {
        phone: '/assets/images/gallery-1-phone.jpg',
        tablet: '/assets/images/gallery-1-tablet.jpg',
        desktop: '/assets/images/gallery-1-desktop.jpg',
        original: '/assets/images/gallery-1-original.jpg',
      },
    },
    {
      id: 1,
      type: 'angular',
      color: 'orange',
      imageUrls: {
        phone: '/assets/images/gallery-2-phone.jpg',
        tablet: '/assets/images/gallery-2-tablet.jpg',
        desktop: '/assets/images/gallery-2-desktop.jpg',
        original: '/assets/images/gallery-2-original.jpg',
      },
    },
    {
      id: 2,
      type: 'round',
      color: 'mint',
      imageUrls: {
        phone: '/assets/images/gallery-3-phone.jpg',
        tablet: '/assets/images/gallery-3-tablet.jpg',
        desktop: '/assets/images/gallery-3-desktop.jpg',
        original: '/assets/images/gallery-3-original.jpg',
      },
      label: 'BOX CAPTION',
    },
    {
      id: 3,
      type: 'round',
      color: 'pink',
      imageUrls: {
        phone: '/assets/images/gallery-4-phone.jpg',
        tablet: '/assets/images/gallery-4-tablet.jpg',
        desktop: '/assets/images/gallery-4-desktop.jpg',
        original: '/assets/images/gallery-4-original.jpg',
      },
      label: 'BOX CAPTION',
    },
  ],
};

export interface GalleryProps {
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const { items } = content;
  return (
    <div className={className}>
      {items.length && (
        <ul className={[styles.list, 'list-unstyled'].join(' ')}>
          {items.map(({ id, type, color, imageUrls, label }) => {
            const itemColor = color && `color-${color}`;

            const imagesData: PictureElement[] = [
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
                altText: label || `${type || ''} tile`,
              },
            ];

            return (
              <li key={id} className={[styles.listItem, itemColor].join(' ')}>
                <figure className={styles.itemInternalWrapper}>
                  <div className={[styles.imageWrapper, styles[type]].join(' ')}>
                    <Picture images={imagesData} className="img-stretched" />
                  </div>
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
    </div>
  );
};

export default Gallery;
