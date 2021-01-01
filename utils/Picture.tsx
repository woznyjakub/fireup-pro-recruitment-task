import { FC, Fragment } from 'react';
import { IPictureElement } from '@entities/picture';

export interface IPictureProps {
  images: IPictureElement[];
  className?: string;
}

export const Picture: FC<IPictureProps> = ({ images, className }) => {
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
