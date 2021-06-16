/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export const MainTitle = ({ textColor, children }) => (
  <h2 className="main-title" style={{ color: textColor }}>
    {children}
  </h2>
);

export const SubTitle = ({ textColor, children }) => (
  <h3 className="sub-title" style={{ color: textColor }}>
    {children}
  </h3>
);

export const Paragraph = ({ textColor, children }) => (
  <p className="paragraph" style={{ color: textColor }}>
    {children}
  </p>
);
