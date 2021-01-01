import styles from './FeaturedTiles.module.scss';
import { Picture } from '@utils/Picture';
import { breakpoints } from '@utils/breakpoints';
import { IPictureElement } from '@entities/picture';

export interface IFeaturedTilesProps {
  content: {
    photoTiles: Array<{
      imageUrls: {
        phone: string;
        tablet: string;
        desktop: string;
      };
      altText: string;
    }>;
    textTiles: Array<{
      title: string;
      titleIconUrl: string;
      listContent: Array<{
        text: string;
      }>;
    }>;
  };
}

export const FeaturedTiles: React.FC<IFeaturedTilesProps> = ({ content }) => {
  const { photoTiles, textTiles } = content;
  return (
    <div className="row">
      {photoTiles &&
        photoTiles.map(({ imageUrls, altText }, i) => {
          const images: IPictureElement[] = [
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
