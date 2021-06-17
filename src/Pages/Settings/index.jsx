import React from 'react';
import { Header, SideMenu } from '../../Components';
import './style.css';

function Settings() {
  return (
    <main className="search-container">
      <SideMenu />
      <section className="search-content">
        <Header headerTitle="Configurações" />
        <section className="settings-container">
          <section className="settings-wrapper">
            <p className="settings-infos">username: admin@email.com</p>
            <p className="settings-infos">password: 123456</p>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Settings;
