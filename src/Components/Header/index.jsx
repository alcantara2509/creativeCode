import React from 'react';
import Colors from '../../Styles/Colors';
import { MainTitle } from '../../Styles/Texts';
import { logoColorida } from '../../Styles/Assets';
import './style.css';

// eslint-disable-next-line react/prop-types
function Header({ headerTitle }) {
  return (
    <header className="header-container">
      <section className="header-content">
        <MainTitle textColor={Colors.mainTitle}>
          {headerTitle}
        </MainTitle>
        <img src={logoColorida} alt="creativeCode logo" className="header-logo" />
      </section>
    </header>
  );
}

export default Header;
