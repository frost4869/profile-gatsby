import React from 'react';
import './styles.scss';
import { colors } from '../../theme';

const Typo = ({ children, customStyles, className, ...rest }) => (
  <p className={`text ${className}`} style={{ color: colors.secondary, ...customStyles }} {...rest}>
    {children}
  </p>
);

export const SectionHeader = ({ children, customStyles, ...rest }) => (
  <Typo className="section-header" style={customStyles} {...rest}>
    {children}
  </Typo>
)

export default Typo;
