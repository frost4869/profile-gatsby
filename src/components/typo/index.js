import React from 'react';
import './styles.scss';

const Typo = ({ children, customStyles, className, ...rest }) => (
  <p className={`text ${className}`} style={customStyles} {...rest}>
    {children}
  </p>
);

export const SectionHeader = ({ children, customStyles, ...rest }) => (
  <Typo className="section-header" style={customStyles} {...rest}>
    {children}
  </Typo>
)

export default Typo;
