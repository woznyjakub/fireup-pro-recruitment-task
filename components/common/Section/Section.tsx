import styles from './Section.module.scss';

interface ISectionProps {
  tagName?: string;
  bgImageUrl?: string;
}

export const Section: React.FC<ISectionProps> = ({ children, tagName = 'section', bgImageUrl }) => {
  // react requires pascal case here
  // @todo: check why ts underlines the `Wrapper` in jsx when it is provided as string (it works well, does not crash)
  const Wrapper = tagName as any;

  return (
    <Wrapper className={`${styles.section} py-3 py-md-4 py-lg-5`} style={{ backgroundImage: `url('${bgImageUrl}')` }}>
      <div className="container">{children}</div>
    </Wrapper>
  );
};
