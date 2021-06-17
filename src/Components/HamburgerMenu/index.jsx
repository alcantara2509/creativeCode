import React, { useContext } from 'react';
import { Context } from '../../Context/Provider';
import './style.css';

function HamburgerMenu() {
  const { isClicked, setIsClicked } = useContext(Context);
  return (
    <div className="hamburger-container">
      <button
        type="button"
        className="hamburger-button"
        onClick={() => {
          if (isClicked === '') setIsClicked('-clicked');
          if (isClicked === '-clicked') setIsClicked('');
        }}
      >
        <span className={`hamburger-lines first-line${isClicked}`} />
        <span className={`hamburger-lines second-line${isClicked}`} />
        <span className={`hamburger-lines third-line${isClicked}`} />
      </button>
    </div>
  );
}

export default HamburgerMenu;
