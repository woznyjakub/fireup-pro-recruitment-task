import styles from './Section.module.scss';

export const Section: React.FC = ({ children }) => {
  return (
    <section className={`${styles.section} py-3 py-md-4 py-lg-5`}>
      <div className="container">{children}</div>
    </section>
  );
};
