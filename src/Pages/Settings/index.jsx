import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header, SideMenu } from '../../Components';
import isLogged from '../../utils/isLogged';
import './style.css';

function Settings() {
  if (!isLogged()) return <Redirect to="/login" />;
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
