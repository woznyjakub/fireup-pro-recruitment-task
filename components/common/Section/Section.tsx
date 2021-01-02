import styles from './Section.module.scss';

interface ISectionProps {
  className?: string;
  bgImageUrl?: string;
  tagName?: string;
}

export const Section: React.FC<ISectionProps> = ({ children, className, tagName = 'section', bgImageUrl }) => {
  // react requires pascal case here
  // @todo: check why ts underlines the `Wrapper` in jsx when it is provided as string (it works well, does not crash)
  const Wrapper = tagName as any;

  return (
    <Wrapper
      className={[styles.section, 'py-3', 'py-md-4', 'py-lg-5', className || ''].join(' ')}
      style={{ backgroundImage: bgImageUrl && `url('${bgImageUrl}')` }}
    >
      <div className="container">{children}</div>
    </Wrapper>
  );
};
