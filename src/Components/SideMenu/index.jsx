import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/Provider';
import HamburgerMenu from '../HamburgerMenu';
import { iconBusca, iconConf, iconHome } from '../../Styles/Assets/index';
import './style.css';

function SideMenu() {
  const { isClicked } = useContext(Context);
  const [isExtended, setIsExtended] = useState('');

  useEffect(() => {
    if (isClicked === '') setIsExtended('');
    if (isClicked === '-clicked') setIsExtended('-extended');
  }, [isClicked]);

  return (
    <aside className={`side-menu-container${isExtended}`}>
      <section className={`side-menu-wrapper${isExtended}`}>
        <HamburgerMenu />
        <section className="side-menu-navlinks">
          <NavLink to="/" activeClassName="selected" className="side-menu-link-icons">
            <img src={iconHome} className="side-menu-icons" alt="lat" />
          </NavLink>
          <NavLink to="/a" activeClassName="selected" className="side-menu-link-icons">
            <img src={iconBusca} className="side-menu-icons" alt="lat" />
          </NavLink>
          <NavLink to="/s" activeClassName="selected" className="side-menu-link-icons">
            <img src={iconConf} className="side-menu-icons" alt="lat" />
          </NavLink>
        </section>
        <img src="" alt="lat" />
      </section>
    </aside>
  );
}

export default SideMenu;
