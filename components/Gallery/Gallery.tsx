import styles from './Gallery.module.scss';
import { breakpoints } from '@utils/breakpoints';
import { Picture } from '@utils/Picture';
import { IPictureElement } from '@entities/picture';

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

export const Gallery: React.FC<IGalleryProps> = ({ className, content }) => {
  const { items } = content;

  return (
    <div className={className}>
      {items.length && (
        <ul className={[styles.list, 'list-unstyled'].join(' ')}>
          {items.map(({ id, type, color, imageUrls, label }) => {
            const itemColor = color && `color-${color}`;

            const imagesData: IPictureElement[] = [
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
