import { FC, Fragment } from 'react';
import { PictureElement } from '@entities/picture';

export interface PictureProps {
  images: PictureElement[];
  className?: string;
}

export const Picture: FC<PictureProps> = ({ images, className }) => {
  images.sort((a, b) => b.breakpoint - a.breakpoint);

  return (
    <picture>
      {images.map(({ breakpoint, url, altText }, i, array) => {
        const isLast = i === array.length - 1;

        return (
          <Fragment key={breakpoint}>
            {isLast ? (
              <img src={url} alt={altText} className={className} />
            ) : (
              <source media={`(min-width: ${breakpoint}px)`} srcSet={url} />
            )}
          </Fragment>
        );
      })}
    </picture>
  );
};
