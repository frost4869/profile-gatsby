import React from 'react';

const Typo = ({ children, customStyles, className, ...rest }) => (
  <p className={`text ${className}`} style={customStyles} {...rest}>
    {children}
  </p>
);

export default Typo;
