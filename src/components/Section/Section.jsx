import PropTypes from 'prop-types';

import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
